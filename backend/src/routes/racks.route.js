const {Router} = require('express')

const route = Router()

const racksController = require('../controllers/racks.controller')

route.get('/racks',racksController.getAllRacks)
route.get('/racks/:id',racksController.getRackById)
route.delete('/racks/:id',racksController.deleteRackById)
route.post('/racks',racksController.createRack)
route.put('/racks/:id',racksController.updateRackById)
module.exports = route