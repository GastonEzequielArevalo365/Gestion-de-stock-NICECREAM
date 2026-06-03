//Las semillas son una forma de poblar la base de datos con datos de prueba o datos iniciales.
//En este caso, el archivo "maquinas.seeder.js" es el encargado de poblar la tabla de máquinas con datos
// de prueba o datos iniciales.
const {Maquina} = require('../models')

async function seedMaquinas(){
    //Usamos async function porque vamos a usar el método bulkCreate que es un método asíncrono, es decir, que devuelve
    // una promesa, y necesitamos esperar a que se resuelva esa promesa para continuar con la ejecución del código.
    await Maquina.bulkCreate([
    //bulkCreate es un método que nos permite crear varios registros en la base de datos de una sola vez, en este caso, estamos
    //creando varias máquinas con sus respectivos atributos.
        {
            nombre:"ZB25",
            cantidad:10,
            alto:30.5,
            ancho:20.4,
            profundidad:15.2,
            peso:25.5,
            imagen:"foto.png",
            categoria:"Hielo",
        }
    ])
    console.log("Maquinas cargadas correctamente")
}

seedMaquinas()