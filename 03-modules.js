// Modules

// Node runs CommonJS under the hood, where EVERY FILE is a module by default.
// Modules = encapsulated code (only share minimum);
// to see exports run console.log(module) in a certain file, and look at exports property (which is an object);

const { john, peter } = require("./04-names");
const sayHi = require("./05-second-module");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade"); // when you import a module you actually invoke it!

// console.log(names);

sayHi("susan");
sayHi(john);
sayHi(peter);

sayHi(data.singlePerson.name);
