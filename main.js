// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res) => {
//   console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
//   res.setHeader('Content-Type','text/plain');
//   res.end('Hello World Carolina!');
// });
// server.listen(3000);
const net = require('net');
const server = net.createServer();
server.on('connection', handleConnection);
server.listen(3000);

function handleConnection(socket) {
  socket.on('data', (chunk) => {
    console.log('Received chunk:\n', chunk.toString());
  });
  socket.write('HTTP/1.1 200 OK\r\nServer: my-web-server\r\nContent-Length: 0\r\n\r\n');
}