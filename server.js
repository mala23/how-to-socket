var express = require('express');
var server = express();
var http = require('http').Server(server);
var io = require('socket.io')(http);

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.render('index.jade');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', 'message: '  + msg);
  });
  socket.on('connection', function(socket){
    io.emit('a user connected');
  });
});

http.listen(1337, function(){
  console.log('listening on *:1337');
});
