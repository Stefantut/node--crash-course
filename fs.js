// fs - filesystem
const fs = require("fs");

//async function - the event loop
// takes 3 arguments (the name of the file, the value, a callback function)
fs.writeFile("message.txt", "Hello there", (err) => {
  if (err) throw err;

  console.log("file has been written");
});