//Este archivo es el encargado de exportar las rutas que se encuentran en la carpeta routes, en este caso, la
// ruta "maquinas.route.js"
const maquinasRoute = require('./maquinas.route')
const palletsRoute = require('./pallets.route')
const racksRoute = require('./racks.route')
const callesRoute = require('./calles.route')

module.exports = {maquinasRoute,palletsRoute,racksRoute,callesRoute}