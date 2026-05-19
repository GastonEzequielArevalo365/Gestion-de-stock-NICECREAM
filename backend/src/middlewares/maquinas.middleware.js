//Traemos las máquinas desde el controlador porque el controlador es el encargado de manejar la lógica de negocio
//En este caso, la lógica de negocio es verificar si una máquina existe o no.
const {maquinas} = require('../controllers/maquinas.controller')

const middleware = {}

const validaExisteMaquina = (req,res,next) =>{
    const id = req.params.id
    const maquina = maquinas.find(m => m.id == id)
    if(!maquina){
        //Utilizamos el return porque en caso que no encuentre la máquina, no queremos que ejecute el next() y 
        //siga con la ejecución del código, sino que queremos que termine la ejecución de la función y devuelva la respuesta al
        // cliente.
        return res.status(404).json({message: `La máquina con id ${id} no existe`})
    }
    next()
}

middleware.validaExisteMaquina = validaExisteMaquina


module.exports = middleware