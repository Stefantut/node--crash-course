// pre-built module in node js
// used if you want to work with the url
const url = require("url");

// fake address
const address = "http://localhost:8000/default.html?year=2020&month=february";

//parse the address
const parsedUrl = url.parse(address, true);

// pull out info from address
// get the host
console.log(parsedUrl.host); //localhost:8080
console.log(parsedUrl.pathname); // /default.html
console.log(parsedUrl.query); // [Object: null prototype] { year: '2020', month: 'february' }
console.log(parsedUrl.query.month); // february
