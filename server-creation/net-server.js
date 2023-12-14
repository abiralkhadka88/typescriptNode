const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    const request = data.toString();

    const urlMatch = request.match(/^GET (\S+)/);

    if (urlMatch) {
      const path = urlMatch[1];
      if (path === "/") {
        sendResponse(socket, "Welcome to homepage", 200);
      } else if (path === "/about") {
        sendResponse(socket, "About us", 201);
      } else {
        sendResponse(socket, "404 Not found.", 404);
      }
    }
  });
});

server.listen(4000, () => {
  console.log("connection established");
});

function sendResponse(socket, body, statusCode) {
  const response = `HTTP/1.1 ${statusCode} OK
    Content-Type:image/jpeg
    Content-Length: ${body.length}

    ${body}
    `;

  socket.write(response);
  socket.end();
}
