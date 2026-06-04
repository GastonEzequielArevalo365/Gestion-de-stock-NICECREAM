const {Calle} = require('../models')
const middleware = {}

const validaExisteCalle = async(req,res,next) =>{
    const id = req.params.id
    const calle = await Calle.findByPk(id)
    if(!calle){
        return res.status(404).json({message: `La calle con el id ${id} no existe`})   
    }
    next()
}

middleware.validaExisteCalle = validaExisteCalle

module.exports = middleware
