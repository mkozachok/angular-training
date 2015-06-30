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
    res.json(users); //cats
});

app.delete('/cat', function(req, res) {

    var deletedCat = req.body.name;
    var countOfCats = cats.cats.length;
    var k = 0;

    for(var i=0; i<countOfCats; i++)
    {
        if(cats.cats[i].name == deletedCat) {
            k = i;
            cats.splice(i, 1);
            break;
        }
    }
});

//app.get('/mentees', function(req, res) {
//    var result = require('./json/mentees.json');
//    res.json(result);
//});

exports = module.exports = app;


