const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(201);
    res.end("Welcome to the website");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(201);
    res.end("About page");
  }
});

server.listen(4000, () => {
  console.log("server is established");
});
