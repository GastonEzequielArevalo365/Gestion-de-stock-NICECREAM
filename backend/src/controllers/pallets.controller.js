const {Pallet} = require('../models')

const controller = {}

const getAllPallets = async (req,res) =>{
    const data = await Pallet.findAll()
    res.status(200).json(data)
}

controller.getAllPallets = getAllPallets

module.exports = controller

const getPalletById = async(req,res) =>{
    const id = req.params.id
    const data = await Pallet.findByPk(id)
    res.status(200).json(data)
}

controller.getPalletById = getPalletById

const deletePalletById = async(req,res) =>{
    const id = req.params.id
    const pallet = await Pallet.destroy({where:{id}})
    console.log({mensaje:`Filas afectadas:${(pallet)}`})
    res.status(200).json({message: `El pallet con id ${id} fue eliminado`})
}

controller.deletePalletById = deletePalletById

const createPallet = async(req,res) =>{
    const{nombre,capacidad,fila,columna} = req.body
    const nuevoPallet = await Pallet.create({
        nombre,
        capacidad,
        fila,
        columna
    })
    res.status(201).json(nuevoPallet)
}

controller.createPallet = createPallet

const updatePalletById = async(req,res) =>{
    const id = req.params.id
    const{nombre,capacidad,fila,columna} = req.body
    const pallet = await Pallet.findByPk(id)
    pallet.nombre = nombre
    pallet.capacidad = capacidad
    pallet.fila = fila
    pallet.columna = columna
    await pallet.save()
    res.status(200).json(pallet)
}

controller.updatePalletById = updatePalletById