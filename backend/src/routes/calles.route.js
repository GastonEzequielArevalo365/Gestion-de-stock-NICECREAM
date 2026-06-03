const {Router} = require('express');

const route = Router()

const callesController = require('../controllers/calles.controller')

route.get('/calles',callesController.getAllCalles)
route.get('/calles/:id',callesController.getCallesById)
route.delete('/calles/:id',callesController.deleteCallesById)
route.post('/calles', callesController.createCalle)
route.put('/calles/:id',callesController.updateCalleById)

module.exports = route