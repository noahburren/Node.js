const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream(fileLocation);

  fileStream.pipe(res);
});

server.listen(port);

console.log(`Server running at http://localhost:${port}/`);
