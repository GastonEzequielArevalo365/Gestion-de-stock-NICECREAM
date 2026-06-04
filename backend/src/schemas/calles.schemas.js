const Joi = require('joi')

const callesSchemas = Joi.object({
    numero: Joi.number().required().integer().min(0).max(100).messages({
        "any.required":"El número es obligatorio",
        "number.base":"El número debe ser un número",
        "number.min":"El número no puede ser negativo",
        "number.max":"El número no puede ser mayor a 100"
    }),
})

module.exports = callesSchemas