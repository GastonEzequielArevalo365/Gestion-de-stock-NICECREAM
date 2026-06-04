const {Rack} = require('../models')

const middleware = {}

const validaExisteRack = async(req,res,next) =>{
    const id = req.params.id
    const rack = await Rack.findByPk(id)
    if(!rack){
        return res.status(404).json({message: `El rack con el id ${id} no existe`})
    }
    next()
}

middleware.validaExisteRack = validaExisteRack

module.exports = middleware 