const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("setNickname", (nickname) => {
    users[socket.id] = nickname;
    io.emit("updateUsers", Object.values(users));
    socket.broadcast.emit("message", `${nickname} has joined the chat`);
  });

  socket.on("chatMessage", (msg) => {
    socket.broadcast.emit("message", `${users[socket.id]}: ${msg}`);
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      io.emit("message", `${users[socket.id]} has left the chat`);
      delete users[socket.id];
      io.emit("updateUsers", Object.values(users));
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
