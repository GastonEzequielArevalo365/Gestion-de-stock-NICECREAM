const {Rack} = require('../models')

async function seedRacks(){
    await Rack.bulkCreate([
        {
            numero:1,
            lado:"A",
            calle_id:1
        }
    ])
}

module.exports = seedRacks