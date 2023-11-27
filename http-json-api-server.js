const http = require("http");
const url = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const isoTime = parsedUrl.query.iso;

  res.writeHead(200, { "Content-Type": "application/json" });

  if (parsedUrl.pathname === "/api/parsetime") {
    const date = new Date(isoTime);
    const jsonResponse = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.end(JSON.stringify(jsonResponse));
  } else if (parsedUrl.pathname === "/api/unixtime") {
    const unixtime = new Date(isoTime).getTime();
    const jsonResponse = {
      unixtime: unixtime,
    };
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid endpoint" }));
  }
});

server.listen(port);

console.log(`Server running at http://localhost:${port}/`);
