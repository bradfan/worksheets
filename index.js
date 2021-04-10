const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg,);
      io.emit('chat message', "user_name");
  });
  
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});

// Objects are Passed by Reference
// In JavaScript, object references are values.

// Because of this, objects will behave like they are passed by reference:

// If a function changes an object property, it changes the original value.

// Changes to object properties are visible (reflected) outside the function.