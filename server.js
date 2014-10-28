var server = require('express')();
var http = require('http').Server(server);

server.get('/', function(req, res){
  res.send('<h1>Hello world!</h1>');
});

server.listen(1337, function(){
  console.log('listening on *:1337');
});
