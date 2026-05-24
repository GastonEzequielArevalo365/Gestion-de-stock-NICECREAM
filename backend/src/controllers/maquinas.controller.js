//Los controladores son los encargador de manejar la lógica de negocio de las rutas, es decir, lo que se va a hacer
//cuando se reciba una petición a una ruta determinada. En este caso, el controlador "maquinas.controller.js"
const {Maquinas} = require('../models')

const controller = {}

const getAllMaquinas = async (req,res) => {
    const data = await Maquinas.findAll()
    res.status(200).json(data)
}

controller.getAllMaquinas = getAllMaquinas

const getMaquinaById = async(req,res) => {
    const id = req.params.id
    const data = await Maquinas.findByPk(id)
    res.status(200).json(data)
}

controller.getMaquinaById = getMaquinaById

const deleteMaquinaById = async(req,res) => {
    const id = req.params.id
    const r = await Maquinas.destroy({where:{id}})
    console.log({mensaje:`Filas afectadas:${(r)}`})
    res.status(200).json({message: `La máquina con id ${id} fue eliminada`})
}

controller.deleteMaquinaById = deleteMaquinaById

const createMaquina = async(req,res) => {
    const{nombre,cantidad,alto,ancho,profundidad,peso,imagen,categoria} = req.body    
    const nuevaMaquina = await Maquinas.create({
        nombre,
        cantidad,
        alto,
        ancho,
        profundidad,
        peso,
        imagen,
        categoria
    })
    res.status(201).json(nuevaMaquina)
}

controller.createMaquina = createMaquina

const updateMaquinaById = async(req,res)=>{
    const id = req.params.id
    const{nombre,cantidad,alto,ancho,profundidad,peso,imagen,categoria} = req.body
    const maquina = await Maquinas.findByPk(id)
    maquina.nombre = nombre
    maquina.cantidad = cantidad
    maquina.alto = alto
    maquina.ancho = ancho
    maquina.profundidad = profundidad
    maquina.peso = peso
    maquina.imagen = imagen
    maquina.categoria = categoria
    await maquina.save()
    res.status(200).json(maquina)
}

controller.updateMaquinaById = updateMaquinaById

module.exports = controller