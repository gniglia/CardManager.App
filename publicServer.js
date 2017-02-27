import path from 'path';
import express from 'express';
import http from 'http';
import socket from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('cardAdded', (data) => {
    socket.broadcast.emit('server:cardAdded', { card: data.card });
  });

  socket.on('cardUpdated', (data) => {
    socket.broadcast.emit('server:cardUpdated', { card: data.card });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = (process.env.PORT || 3000)

server.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
