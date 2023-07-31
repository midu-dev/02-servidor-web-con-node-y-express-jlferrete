// Ejercicio 1: crear servidor HTTP con Node

const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
const path = require('node:path')


function startServer () {

  const desiredPort = process.env.PORT ?? 1234

  const processRequest = (req, res) => {
    

    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end('<h1>¡Hola mundo!</h1>')
    } else if (req.url === '/logo.webp') {
      fs.readFile(path.resolve(__dirname, './assets/logo.webp'), (err, data) => {
        if (err) {         
          res.statusCode = 500
          res.end('<h1>500 Internal Server Error</h1>')
        } else {
          res.setHeader('Content-Type', 'image/webp')
          res.end(data)
        }
      })
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
