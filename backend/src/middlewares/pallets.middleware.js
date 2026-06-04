const {Pallet} = require('../models')
const middleware = {}

const validaExistePallet = async(req,res,next) =>{
    const id = req.params.id
    const pallet = await Pallet.findByPk(id)
    if(!pallet){
        return res.status(404).json({message: `El pallet con el id ${id} no existe`})
    }
    next()
}

middleware.validaExistePallet = validaExistePallet

module.exports = middleware