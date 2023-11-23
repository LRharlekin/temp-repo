const sayHi = (name) => {
  console.log(
    `Hello there, ${
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }!`
  );
};

module.exports = sayHi;
