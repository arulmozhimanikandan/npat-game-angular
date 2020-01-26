const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/npat-game/index.html');
});

app.use(express.static(__dirname + '/dist/npat-game/'));

io.on('connection',(socket) => {
  socket.on('create', (room) => {
    console.log('user joined');
    socket.join(room)

  });

  socket.on('join', (details) => {
    socket.join(details.channel)
    socket.to(details.channel).emit('userJoined', details.name)

  })
});

http.listen(3000, function () {
  console.log('Localhost:3000')
});
