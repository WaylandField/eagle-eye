var express = require('express');
var app = express();


var rawBody = function(req, res, next) {
  req.setEncoding('utf8');
  req.rawBody = '';
  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function(){
    next();
  });
};

/** config **/
app.use('/web', express.static(__dirname+'/static'));

//app.get('/service', function(req, res) {
//    res.send('Hello from Cloud Foundry');
//});

app.use(express.logger());
//app.use(rawBody);
//app.use(express.methodOverride());
//app.use(express.bodyParser());
//app.use(app.router);
//app.use(express.logger({ format: ':method :url' }));


app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(err.stack);
  res.send(500, 'Something broke!');
});

//require('./controller')(app);
app.listen(3000);

