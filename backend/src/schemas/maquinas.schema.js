//Los esquemas de validación son los encargados de validar los datos que recibimos en las peticiones, es decir, verificar
//que los datos que recibimos cumplen con ciertas condiciones, como por ejemplo, que el nombre de la
//máquina sea un string, que la cantidad sea un número, etc. En este caso, el esquema "maquinas.schema.js" es el encargado
//de validar los datos que recibimos en las peticiones relacionadas con las máquinas.
//joi es una librería de validación de datos, nos permite definir esquemas de validación para nuestros datos y luego
// validar los datos contra esos esquemas.
const Joi = require('joi')

const maquinasSchemas= Joi.object().keys({
    nombre: Joi.string().required().min(3).max(50).messages({
        "any.required":"El nombre es obligatorio",
        "string.min" : "El nombre debe tener al menos {#limit} caracteres",
        "string.max" : "El nombre debe tener como máximo {#limit} caracteres",
        "string.empty" : "El nombre no puede estar vacío"
    }),
    //Aquí estamos definiendo que la cantidad debe ser un número, que no puede ser negativo, y que es opcional, es decir, que
    //no es obligatorio que se envíe en la petición, pero si se envía, debe cumplir con esas condiciones.
    cantidad: Joi.number().min(0),
    alto: Joi.number().min(0),
    ancho: Joi.number().min(0),
    profundidad: Joi.number().min(0),
    peso: Joi.number().min(0),
    imagen: Joi.string().uri(),
    categoria: Joi.string().required().min(3).max(100)
})

module.exports = maquinasSchemas