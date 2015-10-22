// VARIABLES for changes - ADD your changes only here
var fileName = './json/cats.json',
    instanceName = '/cats',
    fields = {
        id: 'id',
        name: 'name',
        url: 'source',
        vote: 'likes',
        lokers: 'likers',
        owner: 'owner',
        date: 'date'
    };

// SERVER variables
var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    jwt = require("jsonwebtoken");
extend = require('util')._extend,
    app = expressIO(),
    securityCode = 'monkey',
    folder = process.argv[2] !== 'debug' ? 'build' : 'app',
    authFilename = './json/users.json';

// Default configuration
app.use(expressIO.cookieParser());
app.use(expressIO.bodyParser());

app.http().io();
app.listen(8000);

// Static request
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/index.html');
});
app.get('/templates/{name}', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/templates/' + req.name);
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/' + folder));

// Authorization
function checkAuth(req, res, next) {
    var strToken = req.headers["authorization"],
        token;

    token = strToken ? req.headers["authorization"].replace('Bearer ', '') : '';
    jwt.verify(token, securityCode, function(err, decoded) {
        if (err) {
            res
                .status(403)
                .send({status: 'error', code: "NOPERMISSION", error: "Session expired"});
        } else {
            req.user = decoded;
            next();
        }
    });
}
app.post('/register', function(req, res){
    var login = req.body.login,
        password = req.body.password,
        password2 = req.body.password2,
        users = require(authFilename);

    if (login && password && password === password2){
        users[login] = password;
        fs.writeFile(authFilename, JSON.stringify(users), function(err) {
            if (err){
                res.error({status: 'error'});
            } else {
                res.send({status: 'success'});
            }
        });
    } else {
        res.error({status: 'error'});
    }
});
app.get('/auth', checkAuth, function(req, res){
    res.send({status: 'success', user: req.user});
});
app.post('/auth', function(req, res) {
    var user = {
            login: req.body.login,
            password: req.body.password
        },
        users = require(authFilename),
        token;

    if (user.login && user.password && users[user.login] && user.password === users[user.login]) {
        token = jwt.sign(user, securityCode);
        res.send({
            status: 'success',
            user: user,
            token: token
        });
    } else {
        res.send({status: 'error'});
    }
});

// REST
app.get(instanceName, function(req, res) {
    var result = require(fileName);
    res.json(result);
});
app.get(instanceName + '/:id', function(req, res) {
    var result = require(fileName),
        id = req.params.id,
        instance = result.filter(function(el){return el[fields.id] == id})[0];
    res.json(instance);
});
app.post(instanceName, checkAuth, function(req, res){
    var result = require(fileName),
        instances = result,
        lastId = instances[instances.length - 1][fields.id],
        data = req.body;

    data[fields.id] = lastId + 1;
    data[fields.vote] = 0;
    data[fields.likers] = null;
    data[fields.src] = data[fields.src] || "";
    data[fields.owner] = req.user.login;
    //data.date = new Date();

    result.push(data);
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
            res.error(err);
        } else {
            res.send(data);
        }
    });
});
app.put(instanceName + '/:id', checkAuth, function(req, res, user){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el[fields.id] == id})[0],
        data = req.body;

    if (req.user.login === instance[fields.owner]) {
        extend(instance, data);
        fs.writeFile(fileName, JSON.stringify(result), function (err) {
            console.log(err ? err : "JSON saved to " + fileName);
            if (err) {
                res.error(err);
            } else {
                res.send(instance);
            }
        });
    } else  {
        res
            .status(405)
            .send({status: 'error', code: "NOPERMISSION", error: "No permission"});
    }

});
app.put(instanceName + '/:id/like', function(req, res, user){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el[fields.id] == id})[0],
        data = req.body;

    extend(instance, data);
    fs.writeFile(fileName, JSON.stringify(result), function (err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err) {
            res.error(err);
        } else {
            res.send(instance);
        }
    });

});
app.delete(instanceName + '/:id', checkAuth, function(req, res, user){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el[fields.id] == id})[0],
        instances = result,
        ind = instances.indexOf(instance);

    if (req.user.login === instance[fields.owner]){
        if (ind >= 0) {instances.splice(ind, 1);}
        fs.writeFile(fileName, JSON.stringify(result), function(err) {
            console.log(err ? err : "JSON saved to " + fileName);
            if (err){
                res.error(err);
            } else {
                res.send(instance);
            }
        });
    } else {
        res
            .status(405)
            .send({status: 'error', code: "NOPERMISSION", error: "No permission"});
    }

});

exports = module.exports = app;


