//Traemos la librería express que instalamos anteriormente con npm. Express nos ayuda a crear un servidor local
//y usar rutas de manera más fácil.
const express = require('express')

//Ejecutammos el siguiente comando que crea la aplicación web (Todavía no está escuchando nada, solo creando).
const app = express()

//Traemos la base de datos que creamos con Sequelize. Esto nos permite interactuar con la base de datos desde este archivo.
const db = require('./models')

//Definimos el puerto en el que el servidor va a estar escuchando. 
const PORT = 3001

//Hacemos que el servidor escuche en el puerto definido anteriormente. Esto hace que el servidor siempre esté
//escuchando las peticiones que le llegan a ese puerto y respondiendo a ellas.
app.listen(PORT, async() => {
    console.log(`E//e servidor está escuchando en el puerto ${PORT}`)
    //Esto lo hacemos solo en desarrollo para sincronizar el modelo con la base de datos.
    //Descomentar si hay cambios en el modelo y queremos que se reflejen en la base de datos.
    //Si se borra el comentario, se dropea la base de datos.
    //db.sequelize.sync({force:true}) sincroniza los modelos de models con la base de datos.
    //db.sequelize.sync({force:true})
})

//Traemos las rutas que creamos en el archivo src/routes/index.js
const routes = require('./routes')

//Utilizamos la siguiente función para que el servidor pueda entender el formato JSON que le enviamos.
app.use(express.json())

//Utilizamos las rutas que importamos anteriormente. Esto hace que el servidor pueda responder a las rutas.
app.use(routes.maquinasRoute)



