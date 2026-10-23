const {Calle} = require('../models')

async function seedCalles(){
    await Calle.bulkCreate([
        {numero:"Calle 1"},
        {numero:"Calle 2"}
    ])
}

module.exports = seedCalles