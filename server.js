var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

app.http().io();
app.listen(8000);

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(expressIO.json());

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/build/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/build'));

app.get('/mentors', function(req, res) {
    var result = require('./json/mentors.json');
    res.json(result);
});

var cats = require('./json/cats.json');
app.get('/cats', function(req, res) {
    res.json(cats);
});

//
app.post('/cats', function(req, res) {
	var cat = req.body;
	cats.cats.push(cat);
});
//
exports = module.exports = app;


