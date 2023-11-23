// npm
// global command, comes with node

// npm --version
// npm -v
// gives the version of the installed node package manager, e.g. 10.2.3

// npm i <packageName>
// install package as local dependency - use it only in this particular project

// npm i -g <packageName>
// sudo npm i -g <packageName>
// install package as global dependency - use it in any project

// package.json - manifest file (stores important info about project/package)
// manual approach: create package.json in the root folder, create properties, etc.
// npm init
// create package.json file step by step, press enter to skip
// npm init -y
// create package.json and install all dependencies by default

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
