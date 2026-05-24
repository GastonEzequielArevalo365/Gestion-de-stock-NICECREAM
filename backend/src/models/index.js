//Esta carpeta fue generado al utilizar el comando "npx sequelize-cli init", también fue generada la carpeta config
//La carpeta config contiene el archivo config.json que es donde se configura la conexión a la base de datos.
//'use strict' Sirve para que JavaScript sea más rígido y evite comportamientos peligrosos o confusos. Ayuda a detectar errores antes y hace
//el código más seguro y mantenible.
//Models es una carpeta que administra los modelos de la base de datos, es decir, las tablas y sus relaciones.
'use strict';

//fs: Sirve para leer archivos de carpetas, en este caso, para leer los modelos que tenemos en la carpeta models.
const fs = require('fs');
//path: Sirve para manejar rutas de archivos y carpetas de manera más facil y segura.
const path = require('path');
//Sequelize: Es la librería que utilizamos para interactuar con la base de datos, nos permite crear modelos, hacer consultas, etc.
const Sequelize = require('sequelize');
//process: Es un módulo global que nos permite interactuar con el proceso de Node.js, en este caso, para obtener
//la variable de entorno NODE_ENV y saber en qué entorno estamos (desarrollo, producción, etc.).
const process = require('process');
//basename: Es una función de path que nos devuelve el nombre del archivo actual, en este caso, para evitar
//leer el archivo index.js como un modelo.
const basename = path.basename(__filename);
//env: Es una variable que nos indica en qué entorno estamos, si no está definida, por defecto es "development".
const env = process.env.NODE_ENV || 'development';
//config: Es el archivo de configuración de la base de datos, donde tenemos las credenciales y la información de conexión.
const config = require(__dirname + '/../config/config.json')[env];
//db: Es un objeto que va a contener todos los modelos de la base de datos, para poder exportarlos y utilizarlos en otros archivos.
const db = {};

//sequelize: Es la instancia de Sequelize que vamos a utilizar para interactuar con la base de datos, se crea
//a partir de la configuración que tenemos en el archivo config.json.
let sequelize;
//Si en la configuración tenemos definida la variable use_env_variable, entonces utilizamos esa variable de entorno 
//para crear la conexión a la base de datos, sino, utilizamos los datos de la configuración para crear la conexión.
if (config.use_env_variable) {
  //Si tenemos definida la variable de entorno, entonces utilizamos esa variable para crear la conexión a la base de datos.
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //Si no tenemos definida la variable de entorno, entonces utilizamos los datos de la configuración para crear
  // la conexión a la base de datos.
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Leemos todos los archivos de la carpeta models, filtramos los que no son modelos (index.js, archivos que no terminan en .js, etc.)
//y los importamos como modelos de Sequelize, para luego agregarlos al objeto db con su nombre como clave.
fs
//ReaddirSync: Es una función de fs que nos permite leer los archivos de una carpeta de manera síncrona, en este caso, para leer
//los modelos que tenemos en la carpeta models.
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
