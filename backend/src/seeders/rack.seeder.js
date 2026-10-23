const { Rack } = require('../models');

async function seedRacks() {
    const racks = [];

    // Calle 1: Racks 1 al 6 (Lados A y B)
    for (let numero = 1; numero <= 6; numero++) {
        for (const lado of ['A', 'B']) {
            racks.push({ numero, lado, calle_id: 1 });
        }
    }

    // Calle 2: Racks 1 al 6 (Lados A y B)
    for (let numero = 1; numero <= 6; numero++) {
        for (const lado of ['A', 'B']) {
            racks.push({ numero, lado, calle_id: 2 });
        }
    }

    await Rack.bulkCreate(racks);
}

module.exports = seedRacks;