// Ejercicio 1: crear servidor HTTP con Node

const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

function startServer () {

  const desiredPort = process.env.PORT ?? 1234

  const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
      res.end('<h1>¡Hola mundo!</h1>')
    } else {
      res.statusCode = 404 // Not Found
      res.end('<h1>404</h1>')
    }
  }

  const server = http.createServer(processRequest)

  server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
  })

  return server

}


module.exports = {
  startServer
}
