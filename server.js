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
app.get('/cats', function(req, res) {
  console.log('get /cats');
  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  sleep(2000, function() { console.log('Pause continued');  res.json(catsData); } );
   
});

app.put('/cat', function(req,res)
{
  console.log('put /cat');
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

app.delete('/cat/:id', function(req,res)
{
  console.log('delete /Cat');
  console.log('BODY:');
  console.log(req.body);
  console.log('PARAMS:');
    console.log(req.params);


  var addCatResult = '';
  sleep(1000, function() { console.log('Pause continued'); res.send(addCatResult);} );

  addCatResult = '{"Result":0, "Message":"Cat was not removed: no cat with specified ID was found"}' ;
  for(var i =0 ;i<catsData.length; i++)
  {
    console.log(i+':'+ parseInt(catsData[i].id) + '===' + parseInt(req.params.id) + ':' + ( parseInt(catsData[i].id) === parseInt(req.params.id)) );

    if( catsData[i].id !== undefined && (parseInt(catsData[i].id) === parseInt(req.params.id)) )
    {
        var removedCat = catsData.splice(i, 1);
        console.log(removedCat[0].name);
        addCatResult = '{"Result":1, "Message":"Cat '+removedCat[0].name +' was removed"}' ;
    }

  }
    

});

exports = module.exports = app;


