const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
// const addUser = require("./user.js");
// const user = addUser(user.name);

// socket.join(addUser, msg);




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
io.emit("hello");
  io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
      io.emit('chat message', data);
      console.log(data)
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
// The thinking is to move "server.listen" to the project server in place of "app.listen." Also move lines the "io.on" functions to the project server above the server and below the middleware, although the middleware placement probably isn't an issue.
// from the docs: Starting with 3.0, express applications have become request handler functions that you pass to http or http Server instances. You need to pass the Server to socket.io, and not the express application function. Also make sure to call .listen on the server, not the app.