var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

var bodyParser = require('body-parser');
var cats = require('./json/cat.json');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/cat', function(req, res) {
    var cat = req.body;
    cats.cats.push(cat);
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

//app.get('/mentees', function(req, res) {
//    var result = require('./json/mentees.json');
//    res.json(result);
//});

exports = module.exports = app;


