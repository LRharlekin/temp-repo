// npm
// global command, comes with node

// npm --version
// npm -v
// gives the version of the installed node package manager, e.g. 10.2.3

// npm install
// install all dependencies as listed in the package.json file

// npm i <packageName>
// install package as local dependency - use it only in this particular project

// npm i -g <packageName>
// sudo npm i -g <packageName>
// install package as global dependency - use it in any project

// npm i <packageName> -D
// npm i <packageName> --save-dev
// install package as dev dependency (e.g. nodemon, testing packages, linting)

// npm uninstall <packageName>
// Uninstall package as dependency

// package.json - manifest file (stores important info about project/package)
// manual approach: create package.json in the root folder, create properties, etc.
// npm init
// create package.json file step by step, press enter to skip
// npm init -y
// create package.json and install all dependencies by default

// package-lock.json file
// The purpose of the package-lock is to ensure that the same dependencies (with specified version of each dependency) are installed consistently across different environments, such as development and production environments.

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
console.log("Hello people");

// Script commands in package.json
// see scripts, e.g. "start", "test", "dev"
// these can be used to create a shortcut for certain commands
// e.g. "npm start" can replace "node app.js"
// e.g. "npm run dev" can replace "nodemon app.js"
// etc.

// npx <command>
// introduced in npm 5.2
// x stands for execute, official name of this command is "the npm package runner"
// npx is a tool for running npm packages that (a) live inside of a local node_modules folder OR (b) are not installed globally
// npx looks into the local /node_modules for the package and if it can't find it, it will download and run it without having that package globally installed.
