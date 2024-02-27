// Importing required modules
const http = require('http');

// Defining the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Sending a response
  res.end('Hello, World!\n');
});

// Starting the server and listening to the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
