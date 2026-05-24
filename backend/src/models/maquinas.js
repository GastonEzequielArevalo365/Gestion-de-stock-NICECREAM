//Esta carpeta fue generado al utilizar el comando "npx sequelize-cli init", también fue generada la carpeta config
//La carpeta config contiene el archivo config.json que es donde se configura la conexión a la base de datos.
//Sirve para que JavaScript sea más rígido y evite comportamientos peligrosos o confusos. Ayuda a detectar errores antes y hace
//el código más seguro y mantenible.
//Models es una carpeta que administra los modelos de la base de datos, es decir, las tablas y sus relaciones.
'use strict';
const {
  //Model: Es una clase de Sequelize que nos permite definir modelos de la base de datos, es decir, tablas y sus relaciones.
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maquinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //Maquinas.init: Es una función que nos permite definir el modelo de la tabla "Maquinas" con sus atributos y tipos de datos.
  Maquinas.init({
    nombre: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    alto: DataTypes.DOUBLE,
    ancho: DataTypes.DOUBLE,
    profundidad: DataTypes.DOUBLE,
    peso: DataTypes.DOUBLE,
    imagen: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Maquinas',
    //Si el modelo estaba en singular, la tabla se llamaría "Maquina", pero al estar en plural, se llama "Maquinas"
    //tableName es un atributo que nos permite especificar el nombre de la tabla en la base de datos, en este caso "maquinas"
    tableName: 'maquinas',
    //timestamps:false
  });
  return Maquinas;
};