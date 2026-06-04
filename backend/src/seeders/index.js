const seedMaquinas = require('./maquinas.seeder');
const seedPallets = require('./pallets.seeder');
const seedRacks = require('./rack.seeder')
const seedCalles = require('./calle.seeder')

async function seedAll(){
    await seedCalles(),
    await seedRacks() 
    await seedPallets()
    await seedMaquinas()
}

seedAll()