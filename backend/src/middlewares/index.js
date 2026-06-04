//Este archivo es el encargado de exportar los middlewares que se encuentran en la carpeta middlewares, en este caso, el
// middleware "maquinas.middleware.js"
const maquinasMiddleware = require('./maquinas.middleware')
const palletsMiddleware = require('./pallets.middleware')
const racksMiddleware = require('./racks.middleware')
const callesMiddleware = require('./calles.middleware')

module.exports = {maquinasMiddleware, palletsMiddleware,racksMiddleware,callesMiddleware}
