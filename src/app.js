// importo express
const express = require("express");

// inportar path
const path = require("path");

// crear una app de express
const app = express();

// prendemos el servidor web
app.listen(3000, () => {
  console.log("Servidor prendido");
});

// Carpeta de archivos estaticos
const staticsMiddleware = express.static(path.join(__dirname, "../public"));
app.use(staticsMiddleware);

// Importo mis rutas principales
const mainRouter = require("./routes/main-routes");

// Le digo que use todas las rutas que define este enrutador. Vuelve a ser mi punto de entrada app.js
app.use("/", mainRouter);
