// Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

// For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

const EventEmitter = require("events");

// All objects that emit events are instances of the EventEmitter class.
const customEmitter = new EventEmitter();

// These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.
// SUBscribing to event
customEmitter.on("response", () => {
  console.log(`data received`);
});
customEmitter.on("response", (name, id) => {
  console.log(
    `some other logic that's making use of the args >> name: ${name} (id ${id})`
  );
});
// When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded.
// Syntax:
// emitter.emit(eventName[, ...args])
customEmitter.emit("response", "john", 34);
