const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

// server.listen is async, so as soon as we set it up, the event loop is waiting for requests to come in
server.listen(5000, () => {
  console.log("Server listening on PORT : 5000...");
});
