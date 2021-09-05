const express = require("express");

// Creo router
const router = express.Router();

// importo los controladores
const mainController = require("../controllers/main-controller");

// definimos una ruta
// -> metodo de HTTP: GET, POST, PUT/PATCH, DELETE
// -> La ruta o path: "/home"
// -> "¿Que va a pasar cuando se comuniquen a esa ruta por ese método?"" -> Handler o Controlador
// GET /
router.get("/", mainController.home);

router.get("/about", mainController.about);

module.exports = router;
