//Traemos la librería express que instalamos anteriormente con npm. Express nos ayuda a crear un servidor local y usar rutas de manera más fácil.
const express = require('express')


//Ejecutammos el siguiente comando que crea la aplicación web (Todavía no está escuchando nada, solo creando).
const app = express()

const maquinas = require('./data/maquinas.json')

app.use("/maquinas", (req,res)=> {
    res.status(200).json(
        maquinas.filter(m => m.marca === 'HeladoSoft')
    )
})

app.listen(3001, () => {
    console.log("Este servidor está escuchando en el puerto 3001")
})