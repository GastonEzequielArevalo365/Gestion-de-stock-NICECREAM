const {Router} = require('express');
const route = Router();
const palletController = require('../controllers/pallets.controller')

route.get('/pallets',palletController.getAllPallets)
route.get('/pallets/:id',palletController.getPalletById)
route.delete('/pallets/:id',palletController.deletePalletById)
route.post('/pallets',palletController.createPallet)
route.put('/pallets/:id',palletController.updatePalletById)


module.exports = route