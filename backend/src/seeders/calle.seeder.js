const {Calle} = require('../models')

async function seedCalles(){
    await Calle.bulkCreate([
        {
            nombre:"Calle 1"
        }
    ])
}

module.exports = seedCalles