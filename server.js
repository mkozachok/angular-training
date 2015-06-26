var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

app.use(expressIO.cookieParser());
//app.use(expressIO.session());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(expressIO.json());       // to support JSON-encoded bodies


app.http().io();
app.listen(8000);

var catsData = require('./json/cats.json');


// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    //req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/build/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/build'));


//GETs
app.get('/getCats', function(req, res) {
  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  function foobar(el) { setTimeout(function() { console.log('Pause continued');  res.json(catsData); }, 5000); }
  foobar(5000);
   
});

app.put('/addCat', function(req,res)
{
    console.log('/addCat');
	console.log(req.body);
	function foobar(el) { setTimeout(function() { console.log('Pause continued');  res.json(catsData); }, 5000); }
  foobar(5000);
  
	if( req.body.name && req.body.image )
	{
		catsData.push(req.body);    
		res.send('{"Result":1, "Message":"Cat saved"}');
	}    
	else
		res.send('{"Result":0, "Message":"Cat is notsaved"}');

});

exports = module.exports = app;


