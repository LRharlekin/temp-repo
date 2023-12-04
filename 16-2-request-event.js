const http = require("http");

// USUAL PATTERN:
// const server = http.createServer((req, res) => {
//   res.end('Welcome to our website.');
// });

/* 
!!! R E M E M B E R !!!
All objects that emit events are instances of the EventEmitter class.
(Node Docs: https://nodejs.org/api/events.html#events)
*/

// Using Event Emitter API:
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome to our website.");
});

server.listen(5000, () => {
  console.log("listening on PORT : 5000...");
});
