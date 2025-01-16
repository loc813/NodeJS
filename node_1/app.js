const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const path = require('path')
const server = createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Conten-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   let indexTemplates = fs.readFileSync("./template/index.html", {
// node_1/app.js    encoding: "utf8"
//     });
//   console.log(indexTemplates);
// res.setHeader('Content-Type', 'application/json');
//   let userData = fs.readFileSync("./data/ueser.json", {encoding: "utf8"});
//   res.setHeader('Content-type', 'application/json');
//   res.end(userData);
    res.setHeader("content-type", "text/html");
    

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
