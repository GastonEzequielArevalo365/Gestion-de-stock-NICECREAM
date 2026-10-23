const { Pallet } = require('../models');

async function seedPallets() {
    const pallets = [
        // ==========================================
        // CALLE 1 - LADO A (Rack ID: 1 al 6)
        // ==========================================

        // RACK 1 (Calle 1, Lado A) - ID 1
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 1 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 1 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 1 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 1 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 1 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 1 },
        { nombre: 'Pallet 7', capacidad: 2, fila: 4, columna: 1, rack_id: 1 },
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 1 },

        // RACK 2 (Calle 1, Lado B) - ID 2
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 2 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 2 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 2 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 2 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 2 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 2 },
        { nombre: 'Pallet 7', capacidad: 0, fila: 4, columna: 1, rack_id: 2 },
        { nombre: 'Pallet 8', capacidad: 0, fila: 4, columna: 2, rack_id: 2 },

        // RACK 3 (Calle 1, Lado A) - ID 3
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 3 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 3 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 3 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 3 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 3 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 3 },
        { nombre: 'Pallet 7', capacidad: 2, fila: 4, columna: 1, rack_id: 3 }, 
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 3 }, 

        // RACK 4 (Calle 1, Lado B) - ID 4
        { nombre: 'Pallet 1', capacidad: 0, fila: 1, columna: 1, rack_id: 4 }, 
        { nombre: 'Pallet 2', capacidad: 0, fila: 1, columna: 2, rack_id: 4 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 4 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 4 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 4 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 4 },
        { nombre: 'Pallet 7', capacidad: 0, fila: 4, columna: 1, rack_id: 4 }, 
        { nombre: 'Pallet 8', capacidad: 0, fila: 4, columna: 2, rack_id: 4 }, 

        // RACK 5 (Calle 1, Lado A) - ID 5
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 5 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 5 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 5 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 5 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 5 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 5 },
        { nombre: 'Pallet 7', capacidad: 2, fila: 4, columna: 1, rack_id: 5 }, 
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 5 }, 

        // RACK 6 (Calle 1, Lado B) - ID 6
        { nombre: 'Pallet 1', capacidad: 0, fila: 1, columna: 1, rack_id: 6 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 6 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 6 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 6 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 6 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 6 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 6 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 6 },
        
        
        //RACK 7 (Calle 1, Lado B) - ID 7
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 7 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 7 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 7 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 7 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 7 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 7 },
        { nombre: 'Pallet 7', capacidad: 2, fila: 4, columna: 1, rack_id: 7 }, 
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 7 },

        //RACK 8 (Calle 1, Lado B) - ID 8
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 8 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 8 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 8 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 8 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 8 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 8 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 8 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 8 }, 

        //RACK 9 (Calle 1, Lado B) - ID 9
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 9 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 9 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 9 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 9 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 9 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 9 },
        { nombre: 'Pallet 7', capacidad: 0, fila: 4, columna: 1, rack_id: 9 }, 
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 9 }, 

        //RACK 10 (Calle 1, Lado B) - ID 10
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 10 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 10 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 10 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 10 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 10 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 10 },
        { nombre: 'Pallet 7', capacidad: 0, fila: 4, columna: 1, rack_id: 10 }, 
        { nombre: 'Pallet 8', capacidad: 2, fila: 4, columna: 2, rack_id: 10 }, 
        
        //RACK 11 (Calle 1, Lado B) - ID 11
        { nombre: 'Pallet 1', capacidad: 1, fila: 1, columna: 1, rack_id: 11 }, 
        { nombre: 'Pallet 2', capacidad: 1, fila: 1, columna: 2, rack_id: 11 }, 
        { nombre: 'Pallet 3', capacidad: 2, fila: 2, columna: 1, rack_id: 11 }, 
        { nombre: 'Pallet 4', capacidad: 2, fila: 2, columna: 2, rack_id: 11 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 11 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 11 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 11 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 11 }, 

        //RACK 12 (Calle 1, Lado B) - ID 12
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 12 }, 
        { nombre: 'Pallet 2', capacidad: 0, fila: 1, columna: 2, rack_id: 12 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 12 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 12 }, 
        { nombre: 'Pallet 5', capacidad: 0, fila: 3, columna: 1, rack_id: 12 },
        { nombre: 'Pallet 6', capacidad: 0, fila: 3, columna: 2, rack_id: 12 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 12 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 12 }, 

        //RACK 1 (Calle 2, Lado A) - ID 13
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 13 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 13 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 13 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 13 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 13 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 13 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 13 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 13 },
        
        //RACK 1 (Calle 2, Lado B) - ID 14
        { nombre: 'Pallet 1', capacidad: 0, fila: 1, columna: 1, rack_id: 14 }, 
        { nombre: 'Pallet 2', capacidad: 0, fila: 1, columna: 2, rack_id: 14 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 14 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 14 }, 
        { nombre: 'Pallet 5', capacidad: 1, fila: 3, columna: 1, rack_id: 14 },
        { nombre: 'Pallet 6', capacidad: 1, fila: 3, columna: 2, rack_id: 14 },
        { nombre: 'Pallet 7', capacidad: 1, fila: 4, columna: 1, rack_id: 14 }, 
        { nombre: 'Pallet 8', capacidad: 1, fila: 4, columna: 2, rack_id: 14 },

        //RACK 1 (Calle 2, Lado A) - ID 15
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 15 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 15 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 15 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 15 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 15 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 15 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 15 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 15 },

        //RACK 1 (Calle 2, Lado B) - ID 16
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 16 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 16 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 16 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 16 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 16 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 16 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 16 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 16 },

        //RACK 1 (Calle 2, Lado A) - ID 17
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 17 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 17 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 17 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 17 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 17 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 17 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 17 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 17 },

        //RACK 1 (Calle 2, Lado B) - ID 18
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 18 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 18 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 18 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 18 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 18 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 18 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 18 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 18 },

        //RACK 1 (Calle 2, Lado A) - ID 19
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 19 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 19 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 19 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 19 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 19 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 19 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 19 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 19 },

        //RACK 1 (Calle 2, Lado B) - ID 20
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 20 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 20 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 20 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 20 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 20 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 20 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 20 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 20 },

        //RACK 1 (Calle 2, Lado A) - ID 21
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 21 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 21 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 21 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 21 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 21 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 21 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 21 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 21 },

        //RACK 1 (Calle 2, Lado B) - ID 22
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 22 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 22 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 22 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 22 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 22 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 22 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 22 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 22 },

        //RACK 1 (Calle 2, Lado A) - ID 23
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 23 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 23 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 23 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 23 }, 
        { nombre: 'Pallet 5', capacidad: 2, fila: 3, columna: 1, rack_id: 23 },
        { nombre: 'Pallet 6', capacidad: 2, fila: 3, columna: 2, rack_id: 23 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 23 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 23 },

        //RACK 1 (Calle 2, Lado B) - ID 24
        { nombre: 'Pallet 1', capacidad: 4, fila: 1, columna: 1, rack_id: 24 }, 
        { nombre: 'Pallet 2', capacidad: 4, fila: 1, columna: 2, rack_id: 24 }, 
        { nombre: 'Pallet 3', capacidad: 4, fila: 2, columna: 1, rack_id: 24 }, 
        { nombre: 'Pallet 4', capacidad: 4, fila: 2, columna: 2, rack_id: 24 }, 
        { nombre: 'Pallet 5', capacidad: 4, fila: 3, columna: 1, rack_id: 24 },
        { nombre: 'Pallet 6', capacidad: 4, fila: 3, columna: 2, rack_id: 24 },
        { nombre: 'Pallet 7', capacidad: 4, fila: 4, columna: 1, rack_id: 24 }, 
        { nombre: 'Pallet 8', capacidad: 4, fila: 4, columna: 2, rack_id: 24 },
    ];

    await Pallet.bulkCreate(pallets);
}

module.exports = seedPallets;