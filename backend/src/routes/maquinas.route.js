//Traemos la librería Router de express para crear las rutas de la aplicación.
const { Router } = require('express');
const path = require('path');

//Creamos una instancia de Router para poder crear las rutas de la aplicación.
const route = Router();
const multer = require('multer'); // 👈 TE FALTABA ESTA LÍNEA EXACTAMENTE

//Traemos el controlador de máquinas para poder utilizar las funciones que tenemos ahí.
const maquinasController = require('../controllers/maquinas.controller')
//Traemos el middleware de máquinas para poder utilizar las funciones que tenemos ahí.
const {maquinasMiddleware} = require('../middlewares')
//Traemos el middleware de validación de esquemas para poder validar los datos que recibimos en las peticiones.
const schemaValidarMaquina = require('../middlewares/schemaValidatorMiddleware')
//Traemos el esquema de validación de máquinas para poder validar los datos que recibimos en las peticiones.
const {maquinasSchemas} = require('../schemas')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

//Definimos las rutas de la aplicación. Cada ruta tiene un método HTTP (GET, POST, DELETE, etc.) y una función
//que se ejecuta cuando se hace una petición a esa ruta. En este caso, estamos utilizando las funciones
//que tenemos en el controlador de máquinas para manejar las peticiones a las rutas de máquinas. Además, estamos utilizando
//el middleware de máquinas para validar si una máquina existe o no antes de ejecutar la función del controlador.
route.get('/maquinas', maquinasController.getAllMaquinas)
route.get('/maquinas/:id',maquinasMiddleware.validaExisteMaquina,maquinasController.getMaquinaById)
route.delete('/maquinas/:id',maquinasMiddleware.validaExisteMaquina, maquinasController.deleteMaquinaById)
route.post('/maquinas', upload.single('imagen'),schemaValidarMaquina(maquinasSchemas),maquinasController.createMaquina)
route.put('/maquinas/:id',schemaValidarMaquina(maquinasSchemas),maquinasMiddleware.validaExisteMaquina, maquinasController.updateMaquinaById)
route.post('/maquinas/import',maquinasController.importStock)

module.exports = route