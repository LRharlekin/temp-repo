const { readFile } = require("fs");

console.log("stared a first task");

// CHECK FILE PATH

readFile("../content/first.txt", "utf8", (err, result) => {
  // readFile is async, therfore gets offloaded
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");
