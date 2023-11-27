const http = require("http");
const map = require("through2-map");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Only POST requests are allowed.\n");
  }
});

server.listen(port);

console.log(`Server running at http://localhost:${port}/`);
