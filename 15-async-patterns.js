const { readFile, writeFile } = require("fs");
// instead of utils, you can also simply require('fs').promises
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

console.log("ONE");

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

console.log("TWO");

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

const startPromisified = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade-txt",
      `THIS IS AWESOME : ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

// start();
startPromisified();
console.log("THREE");
