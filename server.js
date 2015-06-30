var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

var catFile = './json/cats.json';

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));
app.use(expressIO.bodyParser());

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
  var fs = require('fs');
  var content = fs.readFileSync(catFile, 'utf8');
  res.json(JSON.parse(content));
});

app.post('/cats', function(req, res) {
  // Read Cat file.
  var fs = require('fs');
  var content = fs.readFileSync(catFile, 'utf8');
  var result = JSON.parse(content);

  // Add new item.
  var max = 0;
  for (var i=0 ; i<result.length ; i++) {
    if (!max || parseInt(result[i].id) > parseInt(max))
      max = result[i].id;
  }
  req.body.id = max + 1;

  result.push(req.body);

  // Write the file.
  var fs = require('fs');
  fs.writeFile(catFile, JSON.stringify(result), function (err) {});
  res.send('OK');
});

app.post('/delete', function(req, res) {
  // Read Cat file.
  var fs = require('fs');
  var content = fs.readFileSync(catFile, 'utf8');
  var result = JSON.parse(content);

  var data = [];
  // Delete element item.
  for (var i = 0 ; i < result.length; i++) {
    if (result[i].id != req.body.id) {
      data.push(result[i]);
    }
  }

  // Write the file.
  var fs = require('fs');
  fs.writeFile(catFile, JSON.stringify(data), function (err) {});
  res.send('OK');
});

exports = module.exports = app;
