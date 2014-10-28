var server = require('express')();
var http = require('http').Server(server);
// server.engine('jade', require('jade').__express);

server.get('/', function(req, res){
  res.render('index.jade');
});

server.listen(1337, function(){
  console.log('listening on *:1337');
});
