//Traemos la librería Router de express para crear las rutas de la aplicación.
const { Router } = require('express');

//Creamos una instancia de Router para poder crear las rutas de la aplicación.
const route = Router();

//Traemos el controlador de máquinas para poder utilizar las funciones que tenemos ahí.
const maquinasController = require('../controllers/maquinas.controller')

//Traemos el middleware de máquinas para poder utilizar las funciones que tenemos ahí.
const maquinasMiddleware = require('../middlewares')

//Definimos las rutas de la aplicación. Cada ruta tiene un método HTTP (GET, POST, DELETE, etc.) y una función
//que se ejecuta cuando se hace una petición a esa ruta. En este caso, estamos utilizando las funciones
//que tenemos en el controlador de máquinas para manejar las peticiones a las rutas de máquinas. Además, estamos utilizando
//el middleware de máquinas para validar si una máquina existe o no antes de ejecutar la función del controlador.
route.get('/maquinas', maquinasController.getAllMaquinas)

route.get('/maquinas/:id', maquinasMiddleware.validaExisteMaquina,maquinasController.getMaquinaById)

route.delete('/maquinas/:id',maquinasMiddleware.validaExisteMaquina, maquinasController.deleteMaquinaById)

route.post('/maquinas',maquinasController.createMaquina)

module.exports = route