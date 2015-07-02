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

function sleep(timeout, action) { setTimeout( action, timeout); }

//GETs
app.get('/getCats', function(req, res) {
  console.log('/getCats');
  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  sleep(2000, function() { console.log('Pause continued');  res.json(catsData); } );
   
});

app.put('/addCat', function(req,res)
{
  console.log('/addCat');
	console.log(req.body);

  var addCatResult = '';
  sleep(2000, function() { console.log('Pause continued'); res.send(addCatResult);} );
  
	if( req.body.name && req.body.image )
	{
		catsData.push(req.body);    
		addCatResult = '{"Result":1, "Message":"Cat saved"}' ;
	}    
	else
		addCatResult = '{"Result":0, "Message":"Cat is not saved"}' ;

});

exports = module.exports = app;


