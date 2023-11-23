const path = require("path");

console.log(path.sep); // returns my platform-specific separator;

const filePath = path.join("/content", "////subfolder", "test.txt"); // path will be normalized >> separator characters will be removed

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

// path.resolve() receives a sequence of paths or path segments as arguments, and resolves these into an absolute path
// why would we need an absolute path? >> because we are running in different environments, so e.g. on hosting environment the path could be different.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
