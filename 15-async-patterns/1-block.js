const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // BLOCKING CODE!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${j} and ${i}`);
      }
    }
    res.end("ABOUT Page");
  } else {
    res.end("error page");
  }
});

server.listen(5000, () => {
  console.log("Server listening on PORT : 5000...");
});
