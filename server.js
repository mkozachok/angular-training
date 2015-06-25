var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser');

var app = expressIO();
var data = {"cats": [{ "id": 1, "name": "Cat1", "image": "Assets\\img\\Cat1.jpg", "age": 5, "gender": "Male" },
          { "id": 2, "name": "Cat2", "image": "Assets\\img\\Cat2.jpg", "age": 15, "gender": "Female"},
          { "id": 3, "name": "Cat3", "image": "Assets\\img\\Cat3.jpg", "age": 1, "gender": "Female"},
          { "id": 4, "name": "Cat4", "image": "Assets\\img\\Cat4.jpg", "age": 3, "gender": "Male"},
          { "id": 5, "name": "Cat5", "image": "Assets\\img\\Cat5.jpg", "age": 7, "gender": "Male"}
      ]};

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));      

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

app.http().io();
app.listen(8000);

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

app.get('/mentees', function(req, res) {
    var result = require('./json/mentees.json');
    res.json(result);
});

app.get('/cats', function(req, res) {
    res.json(data);
});

app.post('/cats', function(req, res) {
    data.cats.push(req.body);
    res.json({});
});

app.delete('/cats/:id', function(req, res) {
	  var indexToDelete = data.cats.map(function (cat) { return cat.id; }).indexOf(parseInt(req.params.id, 10));
	  if (indexToDelete > -1) {
		    data.cats.splice(indexToDelete, 1);
	  }	
   
    res.json({});
});

exports = module.exports = app;


