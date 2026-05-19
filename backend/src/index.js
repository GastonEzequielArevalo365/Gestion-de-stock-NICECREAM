//Traemos la librería express que instalamos anteriormente con npm. Express nos ayuda a crear un servidor local
//y usar rutas de manera más fácil.
const express = require('express')

//Ejecutammos el siguiente comando que crea la aplicación web (Todavía no está escuchando nada, solo creando).
const app = express()

//Definimos el puerto en el que el servidor va a estar escuchando. 
const PORT = 3001

//Hacemos que el servidor escuche en el puerto definido anteriormente. Esto hace que el servidor siempre esté
//escuchando las peticiones que le llegan a ese puerto y respondiendo a ellas.
app.listen(PORT, () => {
    console.log(`Este servidor está escuchando en el puerto ${PORT}`)
})

//Traemos las rutas que creamos en el archivo src/routes/index.js
const routes = require('./routes')

//Utilizamos la siguiente función para que el servidor pueda entender el formato JSON que le enviamos.
app.use(express.json())

//Utilizamos las rutas que importamos anteriormente. Esto hace que el servidor pueda responder a las rutas.
app.use(routes.maquinasRoute)



