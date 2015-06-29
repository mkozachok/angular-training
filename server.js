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

var cats = require('./json/cats.json');
app.get('/cats', function(req, res) {
    res.json(cats);
    console.log('get all cats');
});

//
app.post('/cats', function(req, res) {
	var cat = req.body;
	cats.cats.push(cat);
	cats.lastId = cat.id;
	console.log('push cat ', cat);
});

app.delete('/cats/:catId', function(req, res) {
	for (var i=0; i < cats.cats.length; i++) {
		if (cats.cats[i].id == req.params.catId) {
			cats.cats.splice(i, 1);
			console.log('delete cat with id', req.params.catId);
		}
	}
});
//
exports = module.exports = app;


