const {Router} = require('express')

const route = Router()

const racksController = require('../controllers/racks.controller')
const {racksMiddleware} = require('../middlewares')
const {racksSchemas} = require('../schemas')
const schemaValidarRack = require('../middlewares/schemaValidatorMiddleware') 

route.get('/racks',racksController.getAllRacks)
route.get('/racks/:id',racksMiddleware.validaExisteRack,racksController.getRackById)
route.delete('/racks/:id',racksController.deleteRackById)
route.post('/racks',schemaValidarRack(racksSchemas),racksController.createRack)
route.put('/racks/:id',schemaValidarRack(racksSchemas),racksController.updateRackById)
module.exports = route