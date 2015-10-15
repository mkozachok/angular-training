var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    extend = require('util')._extend;

var app = expressIO(),
    folder = process.argv[2] !== 'debug' ? 'build' : 'app',
    fileName = './json/cats.json',
    instanceName = '/cats';

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));
app.use(expressIO.bodyParser());

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/' + folder + '/index.html');
});
app.get('/templates/{name}', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/templates/' + req.name);
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/' + folder));

app.get(instanceName, function(req, res) {
    var result = require(fileName);
    res.json(result);
});
app.get(instanceName + '/:id', function(req, res) {
    var result = require(fileName),
        id = req.params.id,
        instance = result.filter(function(el){return el.id == id})[0];
    res.json(instance);
});
app.post(instanceName, function(req, res){
    var result = require(fileName),
        instances = result,
        lastId = instances[instances.length - 1].id,
        data = req.body;

    data.id = lastId + 1;
    data.likes = 0;
    data.source = data.source || "";
    //data.date = new Date();

    result.push(data);
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});
app.put(instanceName + '/:id', function(req, res){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el.id == id})[0],
        data = req.body;

    extend(instance, data);
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});
app.delete(instanceName + '/:id', function(req, res){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el.id == id})[0],
        instances = result,
        ind = instances.indexOf(instance);

    if (ind >= 0) {instances.splice(ind, 1);}
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});

exports = module.exports = app;