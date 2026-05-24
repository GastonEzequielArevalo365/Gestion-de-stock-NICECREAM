//Los middlewares son funciones que se ejecutan antes de llegar al controlador, es decir, antes
//de ejecutar la lógica de negocio de la ruta. Sirven para verificar que se cumplan ciertas condiciones antes
//de ejecutar el controlador, como por ejemplo, verificar que exista una máquina con el id que se está pasando por parámetro, o
// verificar que el usuario tenga permisos para acceder a esa ruta, etc.
const middleware = {}

const validaExisteMaquina = async (req,res,next) =>{
    const id = req.params.id
    const maquina = await Maquinas.findByPk(id)
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