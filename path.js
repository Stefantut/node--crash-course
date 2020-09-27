// modules that are pre-built in node js
const path = require("path");

// appends app.js
const fileLocation = path.join(__dirname, ".app.js");

// displays just the filename
const fileName = path.basename(fileLocation);

// displays just the extension
const fileExt = path.extname(fileName);
