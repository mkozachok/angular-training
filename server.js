var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

var cats = [];

var bodyParser = require('body-parser');
app.use(bodyParser.json());

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

app.get('/cats/:id?', function(req, res) {
    if (cats.length === 0){
        var result = require('./json/cats.json');
        cats = result;
    }

    var catsOutput = null;
    var catId = parseInt(req.params.id) || 0;

    if (catId > 0)
    {
        cats.forEach(function(catItem, index) {
        if (catItem.id === catId)
            catsOutput = catItem;
        });
    }
    else {
        catsOutput = cats;
    }

    res.json(catsOutput);
});

app.post('/cats/:id', function(req, res) {
    cats.push({
                    "id" : req.body.id, 
                    "name":req.body.name, 
                    "src": req.body.src, 
                    "count": req.body.count,
                    "is_viewed":req.body.is_viewed,
                    "votes":req.body.votes
                 });
});

app.put('/cats/:id', function(req, res) {
    var cat = null;
    var catId = parseInt(req.params.id);

    cats.forEach(function(catItem, index) {
        if (catItem.id === catId)
            cat = catItem;
    });

    cat.count = req.body.count;
    cat.votes = req.body.votes;

    res.send('<p>Thank you</p>');
});

exports = module.exports = app;