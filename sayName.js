const sayName = () => {
  console.log("Hello");
};

const sayAddress = () => {
  console.log("London Street");
};

// exports function
module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
