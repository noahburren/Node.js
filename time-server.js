const net = require("net");

const port = process.argv[2];

const server = net.createServer((socket) => {
  const now = new Date();

  const formattedDate = `${now.getFullYear()}-${zeroFill(
    now.getMonth() + 1
  )}-${zeroFill(now.getDate())} ${zeroFill(now.getHours())}:${zeroFill(
    now.getMinutes()
  )}\n`;

  socket.write(formattedDate);

  socket.end();
});

server.listen(port);

function zeroFill(number) {
  return number < 10 ? `0${number}` : number;
}
