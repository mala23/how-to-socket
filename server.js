var server = require('express')();
var http = require('http').Server(server);
var io = require('socket.io')(http);
// server.engine('jade', require('jade').__express);

server.get('/', function(req, res){
  res.render('index.jade');
});

io.on('connection', function(){
  console.log('a user connected');
});

server.listen(1337, function(){
  console.log('listening on *:1337');
});
