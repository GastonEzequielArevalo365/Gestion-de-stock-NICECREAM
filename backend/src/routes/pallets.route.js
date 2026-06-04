const {Router} = require('express');
const route = Router();
const palletController = require('../controllers/pallets.controller')
const middleware = require('../middlewares')
const schemaValidarPallet = require('../middlewares/schemaValidatorMiddleware')
const {palletsSchemas} = require('../schemas')


route.get('/pallets',palletController.getAllPallets)
route.get('/pallets/:id',schemaValidarPallet(palletsSchemas),palletController.getPalletById)
route.delete('/pallets/:id',schemaValidarPallet(palletsSchemas),palletController.deletePalletById)
route.post('/pallets',schemaValidarPallet(palletsSchemas),palletController.createPallet)
route.put('/pallets/:id',schemaValidarPallet(palletsSchemas),middleware.palletsMiddleware.validaExistePallet,palletController.updatePalletById)


module.exports = route