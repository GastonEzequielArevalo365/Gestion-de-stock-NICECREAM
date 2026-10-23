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


const createMaquina = async (req, res) => {
    try {
        console.log("BODY RECIBIDO:", req.body);
        console.log("ARCHIVO RECIBIDO:", req.file);

        const { nombre, cantidad, alto, ancho, profundidad, peso, categoria } = req.body;

        // Si viene foto por Multer usamos su nombre; si no, null
        const nombreImagen = req.file ? req.file.filename : null;

        const nuevaMaquina = await Maquina.create({
            nombre: nombre || "Sin nombre",
            cantidad: Number(cantidad) || 0,
            alto: Number(alto) || 0,
            ancho: Number(ancho) || 0,
            profundidad: Number(profundidad) || 0,
            peso: Number(peso) || 0,
            categoria: categoria || null,
            imagen: nombreImagen
        });

        return res.status(201).json(nuevaMaquina);
    } catch (error) {
        console.error("❌ ERROR EXACTO DE SEQUELIZE:", error);
        return res.status(500).json({ error: error.message });
    }
};
controller.createMaquina = createMaquina


const updateMaquinaById = async(req,res)=>{
    const id = req.params.id;
    const { nombre, cantidad, alto, ancho, profundidad, peso, categoria, pallet_id } = req.body;
    
    const maquina = await Maquina.findByPk(id);
    if (!maquina) {
        return res.status(404).json({ error: "Máquina no encontrada" });
    }

    // Si enviaron un archivo nuevo lo actualizamos, si no, conservamos el que tenía
    if (req.file) {
        maquina.imagen = req.file.filename;
    } else if (req.body.imagen !== undefined) {
        maquina.imagen = req.body.imagen;
    }

    maquina.nombre = nombre;
    maquina.cantidad = cantidad;
    maquina.alto = alto;
    maquina.ancho = ancho;
    maquina.profundidad = profundidad;
    maquina.peso = peso;
    maquina.categoria = categoria;
    maquina.pallet_id = pallet_id;

    await maquina.save();
    res.status(200).json(maquina);
}

controller.updateMaquinaById = updateMaquinaById

const importStock = async (req, res) => {
    try {
        const maquinasExcel = req.body; // Arreglo de objetos leídos del Excel

        if (!Array.isArray(maquinasExcel) || maquinasExcel.length === 0) {
            return res.status(400).json({ error: "El archivo no contiene filas válidas." });
        }

        // Mapear y procesar los campos para la base de datos
        const maquinasAInsertar = maquinasExcel.map(fila => {
            // Limpiar comillas en categoria si vienen del Excel (ej: "Helado" -> Helado)
            let categoriaLimpia = fila.categoria;
            if (typeof categoriaLimpia === 'string') {
                categoriaLimpia = categoriaLimpia.replace(/^"|"$/g, '').trim();
            }

            return {
                nombre: fila.nombre || "Sin Nombre",
                cantidad: fila.cantidad ? parseInt(fila.cantidad, 10) : 0,
                alto: fila.alto ? parseFloat(String(fila.alto).replace(',', '.')) : 0,
                ancho: fila.ancho ? parseFloat(String(fila.ancho).replace(',', '.')) : 0,
                profundidad: fila.profundidad ? parseFloat(String(fila.profundidad).replace(',', '.')) : 0,
                peso: fila.peso ? parseFloat(String(fila.peso).replace(',', '.')) : 0,
                imagen: fila.imagen ? String(fila.imagen).trim() : null, // Mantiene "ZB25.png" o "luffi.jpg"
                categoria: categoriaLimpia || null,
                pallet_id: fila.pallet_id ? parseInt(fila.pallet_id, 10) : null
            };
        });

        await Maquina.bulkCreate(maquinasAInsertar);

        res.status(201).json({
            ok: true,
            mensaje: "Máquinas importadas correctamente"
        });
    } catch (error) {
        console.error("❌ Error en importStock:", error);
        res.status(500).json({ error: "Error al importar el stock desde Excel" });
    }
};

controller.importStock = importStock;

controller.importStock = importStock

module.exports = controller