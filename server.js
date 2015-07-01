var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

var bodyParser = require('body-parser');
var cats = require('./json/cat.json');
var users = require('./json/users.json');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/cat', function(req, res) {
    var cat = req.body;
    cats.cats.push(cat);
    //res.json(cats);
});

app.post('/users', function(req, res) {
    var user = req.body;
    users.user.push(user);
    //res.json(cats);
});

//GET
app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/app/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/app'));

app.get('/cat', function(req, res) {
   // var result = require('./json/cat.json'); //оскыльки память то перший раз треба выдкрити щоб з кетс записати котыв, потым коли вони вже будуть в памяты вын ен потрыбен
    res.json(cats); //cats
});

app.get('/users', function(req, res) {

    res.json(users);
});

app.delete('/cat', function(req, res)
{
    var deletedCat = req.query.name;

    var countOfCats = cats.cats.length;
    var k = 0;

    for(var i=0; i<countOfCats; i++)
    {
        if(cats.cats[i].name == deletedCat) {
            k = i;
            cats.cats.splice(i, 1);
            break;
        }
    }
    res.send("success");
});

app.delete('/users', function(req, res)
{
    var addToUser = req.query.name;
    var countOfUsers = users.user.length;
    var k = 0;

    for(var i=0; i<countOfUsers; i++)
    {
        if(users.user[i].name === addToUser) {
            k = i;
            //console.log(users.user[i].name );
            //users.user.splice(i, 1);
         //  users.user.push(req.query);
            users.user[i].catVote = req.query.catVote;
            //users.user[i].push(req.query.catVote);
            break;
        }
    }
    res.send("success");
});

exports = module.exports = app;


