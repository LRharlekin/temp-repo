// started operating system process
console.log("first");

// setTimeout is async, therfore gets offloaded
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// completed and exited operating system process
