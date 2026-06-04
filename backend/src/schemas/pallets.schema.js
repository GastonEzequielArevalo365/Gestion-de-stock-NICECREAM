const Joi = require('joi')

const palletsSchemas = Joi.object({
    nombre: Joi.string().required().min(0).max(50).messages({
        "any.required":"El nombre es obligatorio",
        "string.min" : "El nombre debe tener al menos {#limit} caracteres",
        "string.max" : "El nombre debe tener como máximo {#limit} caracteres",
        "string.empty" : "El nombre no puede estar vacío"
    }),
    capacidad: Joi.number().integer().min(0).messages({
        "number.base":"La capacidad debe ser un número",
        "number.min":"La capacidad no puede ser negativa"
    }),
    fila: Joi.number().integer().min(0).messages({
        "number.base":"La fila debe ser un número",
        "number.min":"La fila no puede ser negativa"
    }),
    columna: Joi.number().integer().min(0).messages({
        "number.base":"La columna debe ser un número",
        "number.min":"La columna no puede ser negativa"
    }),
})

module.exports = palletsSchemas