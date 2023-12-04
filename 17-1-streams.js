// "Streams are used to read or write sequentially."

// A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface.

// There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances.

// Streams can be readable, writable, or both. All streams are instances of EventEmitter.

// 4 Types of Streams in Node.js:
// [1.] Writable: Used to write data sequentially.
// Example - fs.createWriteStream()
// [2.] Readable: Used to read data sequentially.
// Example - fs.createReadStream()
// [3.] Duplex: Used to, both, read and write data sequentially.
// Example - net.Socket
// [4.] Transform: Duplex streams, that can modify or transform the data while writing or reading.
// Example - zlib.createDeflate()

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

// default size of each chunk: 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const customStream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  // encoding: "utf8",
});

// stream.on("data", (result) => {
//   console.log(result);
// });

customStream.on("data", (result) => {
  console.log(result);
});
