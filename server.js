var express = require('express');
var server = express();
var http = require('http').Server(server);
var io = require('socket.io')(http);

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.render('index.jade');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(socket){
    console.log('a user disconnected');
  });
});

http.listen(1337, function(){
  console.log('listening on *:1337');
});
