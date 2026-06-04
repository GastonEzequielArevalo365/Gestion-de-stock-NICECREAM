const {Rack,Calle,Pallet} = require ('../models')

const controller = {}

const getAllRacks = async (req,res) =>{
    const data = await Rack.findAll()
    res.status(200).json(data)
}

controller.getAllRacks = getAllRacks

const getRackById = async(req,res) =>{
    const id = req.params.id
    const data = await Rack.findOne({
        where:{id},
        include:[{
            model:Calle,
            as:'calle'
        },
        {
            model:Pallet,
            as:'pallets'
        }
    ]
    })
    res.status(200).json(data)
}

controller.getRackById = getRackById

const deleteRackById = async(req,res) =>{
    const id = req.params.id
    const r = await Rack.destroy({where:{id}})
    console.log({mensaje:`Filas afectadas:${(r)}`})
    res.status(200).json({mensaje:`El rack con el id ${id} fue eliminada`})
}

controller.deleteRackById = deleteRackById

const createRack = async(req,res) =>{
    const{numero,lado} = req.body
    const nuevoRack = await Rack.create({
        numero,
        lado
    })
    res.status(201).json(nuevoRack)
}

controller.createRack = createRack

const updateRackById = async(req,res) =>{
    const id = req.params.id
    const{numero,lado,calle_id} = req.body
    const rack = await Rack.findByPk(id)
    rack.numero = numero
    rack.lado = lado
    rack.calle_id = calle_id
    await rack.save()
    res.status(200).json(rack)
}

controller.updateRackById = updateRackById

module.exports = controller