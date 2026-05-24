//Este middleware es el encargado de validar que el cuerpo de la petición cumpla con el esquema definido, en este caso, el
//esquema de la máquina, utilizando la librería Joi para validar los datos.

const schemaValidatorMiddleware = (schema) => {
    //El middleware es una función que recibe un esquema de validación y devuelve una función que se ejecuta antes 
    //de llegar al controlador, es decir, antes de ejecutar la lógica de negocio de la ruta. Esta función valida el
    //cuerpo de la petición utilizando el esquema definido, y si encuentra algún error, devuelve una respuesta con el
    //error, sino, llama a next() para continuar con la ejecución del código.
    //El return es necesario para que la función devuelva la función que se ejecuta antes de llegar al controlador, sino, no
    // funcionaría el middleware.
    return (req, res, next) => {
        //La variable result es el resultado de la validación del cuerpo de la petición utilizando el esquema definido, y
        //el segundo parámetro { abortEarly: false } es para que Joi no se detenga en el primer error que encuentre, sino
        //que siga validando y devuelva todos los errores encontrados.
        const result = schema.validate(req.body, { abortEarly: false })
        if (result.error) {
            return res.status(400).json({
                message: result.error.details
                    .map(e => e.message)
                    .join(',')
            })
        }
        next()
    }
}

module.exports = schemaValidatorMiddleware