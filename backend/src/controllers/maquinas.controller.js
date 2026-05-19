const maquinas = require('../../data/maquinas.json')

const controller = {}

controller.maquinas = maquinas

const getAllMaquinas = (req,res) => {
    res.status(200).json(maquinas)
}

controller.getAllMaquinas = getAllMaquinas

const getMaquinaById = (req,res) => {
    const id = req.params.id
    const maquina = maquinas.find(m => m.id == id)
    res.status(200).json(maquina)
}

controller.getMaquinaById = getMaquinaById

const deleteMaquinaById = (req,res) => {
    const id = req.params.id
    const idx = maquinas.findIndex(m => m.id == id)
    maquinas.splice(idx,1)
    res.status(200).json({message: `La máquina con id ${id} fue eliminada`})
}

controller.deleteMaquinaById = deleteMaquinaById

const createMaquina = (req,res) => {
    const{nombre,marca,modelo,tipo,estado} = req.body
    const ids = maquinas.map(m => m.id)
    const nuevaMaquina = {
        id: ids.length == 0 ? 1 : Math.max(...ids) + 1,
        nombre,
        marca,
        modelo,
        tipo,
        estado
    }
    maquinas.push(nuevaMaquina)
    res.status(201).json(nuevaMaquina)
}

controller.createMaquina = createMaquina

module.exports = controller