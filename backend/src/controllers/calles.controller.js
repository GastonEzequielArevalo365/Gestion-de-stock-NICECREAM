const {Calle,Rack} = require('../models')

const controller = {}

const getAllCalles = async (req,res) =>{
    const data = await Calle.findAll()
    res.status(200).json(data)
}

controller.getAllCalles = getAllCalles

const getCallesById = async(req,res) => {
    const id = req.params.id
    const data = await Calle.findOne({
        where:{id},
        include:{
            model:Rack,
            as:'racks'
        }
    })
    res.status(200).json(data)
}

controller.getCallesById = getCallesById

const deleteCallesById = async(req,res) =>{
    const id = req.params.id
    const r = await Calle.destroy({where:{id}})
    console.log({message:`Filas afectadas:${(r)}`})
    res.status(200).json({message:`La calle con el id ${id} fue eliminadad`})
}

controller.deleteCallesById = deleteCallesById

const createCalle = async(req,res) =>{
    const{numero} = req.body
    const nuevaCalle = await Calle.create({
        numero
    })
    res.status(201).json(nuevaCalle)
}

controller.createCalle = createCalle

const updateCalleById = async(req,res) =>{
    const id = req.params.id
    const{numero} = req.body
    const calle = await Calle.findByPk(id)
    calle.numero = numero
    await calle.save()
    res.status(200).json(calle)
}

controller.updateCalleById = updateCalleById

module.exports = controller