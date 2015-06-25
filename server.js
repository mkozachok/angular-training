var cats = require('./json/cats.json');
console.log(cats);
console.log("Array length: " + cats.length);

var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

app.use(expressIO.cookieParser());
app.use(expressIO.session({ secret: 'monkey' }));

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/build/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/build'));



app.get('/cats', function (req, res) {
    //var result = require('./json/cats.json');
    res.json(cats);
});

app.get('/cats/:id', function (req, res) {
   // var result = require('./json/cats.json');
    res.json(cats[req.params.id]);
});

app.post('/cats', function (req, res) {

    console.log("Atempt to add new cat:");
    console.log(req.body);

    var highest = cats[cats.length - 1].id;
    var itemToAdd = req.body;
    itemToAdd.id = (parseInt(highest) + 1).toString();
    cats.push(itemToAdd);

    console.log("Saved new cat with id: " + itemToAdd.id);
    console.log("new data: ");
    console.log(cats);

    res.send('Saved');
})

app.put('/cats', function (req, res) {
    console.log("Atempt to edit a cat:");
    console.log(req.body);

    var itemToEdit = req.body;
    for (var i = cats.length - 1; i >= 0; i--) {
        if (cats[i].id == itemToEdit.id) {
            cats[i].name = itemToEdit.name;
            cats[i].likes = itemToEdit.likes;
            cats[i].clicks = itemToEdit.clicks;
            cats[i].pic = itemToEdit.pic;
            cats[i].checked = itemToEdit.checked;

            console.log("Edited");
            console.log("updated data: " + cats);
            break;
        }
    }
    res.send('Edited');
})

// accept DELETE request at /user
app.delete('/cats/:id', function (req, res) {
    //var data = require('./json/cats.json');

    for (var i = cats.length - 1; i >= 0; i--) {
        if (cats[i].id == req.params.id) {
            cats.splice(i, 1);
            break;
        }
    };

    console.log("Cat with id " + req.params.id + " has been deleted");
    console.log("Updated data:");
    console.log(cats);

    res.send('Cat has been deleted');
});

exports = module.exports = app;


