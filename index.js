// Ejercicio 1: crear servidor HTTP con Node

const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
const path = require('node:path')
const PORT = process.env.PORT ?? 1234

function err404(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html; charset=utf8",
  });
  return res.end("<h1>404</h1>");
}

function err405(req, res) {
  res.writeHead(405, {
    "Content-Type": "text/html; charset=utf8",
  });
  return res.end("<h1>405</h1>");
}

function processRequest(req, res) {
  const { method, url } = req;

}

function startServer () {
  const server = http.createServer(processRequest);
  return server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

module.exports = {
  startServer
}
