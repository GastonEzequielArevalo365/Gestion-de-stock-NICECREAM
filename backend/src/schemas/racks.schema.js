const Joi = require('joi')

const racksSchemas = Joi.object({
    numero: Joi.number().integer().min(0).max(100).required().messages({
        "number.base":"El número debe ser un número",
        "number.min":"El número no puede ser negativo",
        "number.max":"El número no puede ser mayor a 100",
        "any.required":"El número es obligatorio"
    }),
    lado: Joi.string().max(50).required().messages({
        "string.max":"El lado no puede tener más de 50 caracteres",
        "any.required":"El lado es obligatorio"
    })
})

module.exports = racksSchemas