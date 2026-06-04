const {Rack} = require('../models')

async function seedRacks(){
    await Rack.bulkCreate([
        {
            nombre:"Rack 1",
            capacidad:10,
            calle_id:1
        }
    ])
}

module.exports = seedRacks