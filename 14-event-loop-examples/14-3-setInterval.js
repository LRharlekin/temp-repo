// setInterval is async, therefore gets offloaded
setInterval(() => {
  console.log("hello world");
}, 2000);

console.log("I will run first");

// process stays alive unless
// Kill Proces CONTROL + C
// unexpected error
