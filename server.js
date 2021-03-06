var express=require('express');
var app=express();
var path=require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname)));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});


io.on('connection', function(socket){
  var count = 10;
  setInterval(function(){
    count = count + 1;
    socket.emit('data',count);
  }, 1000);
});

//app.listen(process.env.PORT||3000);
http.listen(process.env.PORT||3000, function(){
  console.log(`listening on port: ${process.env.PORT||3000}`);
});