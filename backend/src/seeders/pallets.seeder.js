const {Pallet} = require('../models')

async function seedPallets(){
    await Pallet.bulkCreate([
        {
            nombre:"Pallet 0-1",
            capacidad:4,
            fila:0,
            columna:1,
            rack_id:1
        },
        {
            nombre:"Pallet 0-2",
            capacidad:4,
            fila:0,
            columna:2,
            rack_id:1
        },
        {
            nombre:"Pallet 1-1",
            capacidad:10,
            fila:1,
            columna:1,
            rack_id:1
        }
    ])
}


module.exports = seedPallets