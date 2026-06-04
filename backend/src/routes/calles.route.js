const {Router} = require('express');

const route = Router()

const callesController = require('../controllers/calles.controller')
const {callesMiddleware} = require('../middlewares')
const {callesSchemas} = require('../schemas')
const schemaValidarCalle = require('../middlewares/schemaValidatorMiddleware')

route.get('/calles',callesController.getAllCalles)
route.get('/calles/:id',callesMiddleware.validaExisteCalle,callesController.getCallesById)
route.delete('/calles/:id',callesMiddleware.validaExisteCalle,callesController.deleteCallesById)
route.post('/calles',schemaValidarCalle(callesSchemas),callesController.createCalle)
route.put('/calles/:id',schemaValidarCalle(callesSchemas),callesController.updateCalleById)

module.exports = route