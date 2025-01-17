const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Hello");
  } else if (req.url === "/home") {
    res.end("hey");
  }
});

server.listen(3000);
