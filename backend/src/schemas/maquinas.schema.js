//Los esquemas de validación son los encargados de validar los datos que recibimos en las peticiones, es decir, verificar
//que los datos que recibimos cumplen con ciertas condiciones, como por ejemplo, que el nombre de la
//máquina sea un string, que la cantidad sea un número, etc. En este caso, el esquema "maquinas.schema.js" es el encargado
//de validar los datos que recibimos en las peticiones relacionadas con las máquinas.
//joi es una librería de validación de datos, nos permite definir esquemas de validación para nuestros datos y luego
// validar los datos contra esos esquemas.
const Joi = require('joi')
//Aquí estamos definiendo el esquema de validación para las máquinas, utilizando la librería Joi. Cada campo del esquema tiene
// sus propias condiciones de validación, como por ejemplo, el nombre es un string obligatorio, la cantidad es un número.
const maquinasSchemas= Joi.object().keys({
    nombre: Joi.string().required().min(3).max(50).messages({
        //Aquí estamos definiendo los mensajes de error personalizados para cada una de las condiciones de validación del
        // campo nombre, como por ejemplo, si el nombre no es un string, si no se envía el nombre, si el nombre es muy 
        //corto o muy largo, etc.
        "any.required":"El nombre es obligatorio",
        "string.min" : "El nombre debe tener al menos {#limit} caracteres",
        "string.max" : "El nombre debe tener como máximo {#limit} caracteres",
        "string.empty" : "El nombre no puede estar vacío"
    }),
    //Aquí estamos definiendo que la cantidad debe ser un número, que no puede ser negativo, y que es opcional, es decir, que
    //no es obligatorio que se envíe en la petición, pero si se envía, debe cumplir con esas condiciones.
    cantidad: Joi.number().min(0).messages({
        "number.min":"La cantidad de máquinas no puede ser negativa"
    }),
    alto: Joi.number().min(0).messages({
        "number.min":"El alto de la máquina no puede ser negativo"
    }),
    ancho: Joi.number().min(0).messages({
        "number.min":"El ancho de la máquina no puede ser negativo"
    }),
    profundidad: Joi.number().min(0).messages({
        "number.min":"La profundidad de la máquina no puede ser negativa"
    }),
    peso: Joi.number().min(0).messages({
        "number.min":"El peso de la máquina no puede ser negativo"
    }),
    imagen: Joi.string().allow(""),
    categoria: Joi.string().required().min(3).max(50).messages({
        "any.required":"La categoría es obligatoria",
        "string.min" : "La categoría debe tener al menos {#limit} caracteres",
        "string.max" : "La categoría debe tener como máximo {#limit} caracteres",
        "string.empty" : "La categoría no puede estar vacía"
    })
})

module.exports = maquinasSchemas