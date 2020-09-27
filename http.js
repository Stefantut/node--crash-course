// pre-built module in node js
// will create a server

const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write("helllo user");
  //close the response
  //   res.end();
  if (req.url === "/") {
    //add in head - metadata
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the homepage</h1>");
    res.end();
  }
  if (req.url === "/user") {
    res.write("welcome user john");
    res.end();
  }
});

// response - what we give to the user
// request - what we get from the user

//listen to request
server.listen(3000, () => console.log("Server is running")); //localhost:3000
