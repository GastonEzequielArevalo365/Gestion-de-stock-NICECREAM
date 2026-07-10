//Los controladores son los encargador de manejar la lógica de negocio de las rutas, es decir, lo que se va a hacer
//cuando se reciba una petición a una ruta determinada. En este caso, el controlador "maquinas.controller.js"
const {Maquina,Pallet,Rack,Calle} = require('../models')

const controller = {}

const getAllMaquinas = async (req,res) => {
    const data = await Maquina.findAll({
        where:{activo:true},
        include:[
            {
                association: 'pallet',
                include:[
                    {
                        association: 'rack',
                        include:[
                            {
                                association: 'calle'
                            }
                        ]
                    }
                ]
            }
        ]
    })
    res.status(200).json(data)
}   

controller.getAllMaquinas = getAllMaquinas

const getMaquinaById = async(req,res) => {
    const id = req.params.id
    const data = await Maquina.findOne({
        where:{id},
        include:{
            model: Pallet,
            as:'pallet',
            include:{
                model:Rack,
                as:'rack',
                include:{
                    model:Calle,
                    as:'calle'
                }
            }
        }
    })
    res.status(200).json(data)
}

controller.getMaquinaById = getMaquinaById

const deleteMaquinaById = async(req,res) => {
    const id = req.params.id
    const r = await Maquina.update({activo:false},{where:{id}})
    console.log({mensaje:`Filas afectadas:${(r)}`})
    res.status(200).json({message: `La máquina con id ${id} fue eliminada`})
}

controller.deleteMaquinaById = deleteMaquinaById

const createMaquina = async(req,res) => {
    const{nombre,cantidad,alto,ancho,profundidad,peso,imagen,categoria,pallet_id} = req.body    
    const nuevaMaquina = await Maquina.create({
        nombre,
        cantidad,
        alto,
        ancho,
        profundidad,
        peso,
        imagen,
        categoria,
    })
    res.status(201).json(nuevaMaquina)
}

controller.createMaquina = createMaquina


const updateMaquinaById = async(req,res)=>{
    const id = req.params.id
    const{nombre,cantidad,alto,ancho,profundidad,peso,imagen,categoria,pallet_id} = req.body
    const maquina = await Maquina.findByPk(id)
    maquina.nombre = nombre
    maquina.cantidad = cantidad
    maquina.alto = alto
    maquina.ancho = ancho
    maquina.profundidad = profundidad
    maquina.peso = peso
    maquina.imagen = imagen
    maquina.categoria = categoria
    maquina.pallet_id = pallet_id
    await maquina.save()
    res.status(200).json(maquina)
}

controller.updateMaquinaById = updateMaquinaById

const importStock = async (req,res) =>{
    const maquinas = req.body
    console.log("DATOS A INSERTAR:", maquinas);
    await Maquina.bulkCreate(maquinas)
    res.status(201).json({
        ok:true,
        mensaje:"Maquinas importadas correctamente"
    })
}

controller.importStock = importStock

module.exports = controller