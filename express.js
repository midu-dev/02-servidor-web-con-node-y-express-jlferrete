// Ejercicio 2: crear servidor HTTP con Express
const express = require("express");
const fs = require("node:fs");
const PORT = process.env.PORT ?? 1234;

function startServer() {
  const server = express();
  server.disable("x-powered-by");
  server.use(express.json());
  server.use(express.static("assets"));

  server.all("/", (req, res) => {
    if (req.method === "GET") {
      return res.send("<h1>¡Hola mundo!</h1>"); 
    } else {
      //Se indica que la ruta solo soportaba el metodo GET, todos los demas deben retornar 405
      return res.status(405).send("<h1>405</h1>");
    }
  });

  server.all("/404", (req, res) => {
    if (req.method === "GET") {
      return res.status(404).send("<h1>404</h1>");
    } else {
      //Se indica que la ruta solo soportaba el metodo GET, todos los demas deben retornar 405
      return res.status(405).send("<h1>405</h1>");
    }
  });

  //Se indica que la ruta solo soportaba el metodo GET, todos los demas deben retornar 405
  server.all("/logo.webp", (req, res) => {
    if (req.method !== "GET") {
      return res.status(405).send("<h1>405</h1>");
    }
  });

  //POST
  server.all("/contacto", (req, res) => {
    if (req.method === "POST") {
      //el middleware express.json() añade al req.body el json en metodos post de content-type application/json
      //esta parte me estaba dando bastantes quebraderos de cabeza
      //y saqué la idea de otro de los compañeros del curso
      return res.status(201).json(req.body);
    } else {
      //Se indica que la ruta solo soportaba el metodo POST, todos los demas deben retornar 405
      return res.status(405).send("<h1>405</h1>");
    }
  });

  //Se deve devolver 404 si no se trata de alguna de las rutas anteriores
  server.use((req, res) => {
    return res.status(404).send("<h1>404</h1>");
  });

  return server.listen(PORT, () => {
    console.log(`Server listening at :  http://localhost:${PORT}`);
  });
}

module.exports = {
  startServer,
};
