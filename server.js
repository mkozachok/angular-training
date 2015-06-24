var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

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

app.get('/cats', function(req, res) {
    var result = require('./json/cats.json');
    res.json(result);
});

exports = module.exports = app;


