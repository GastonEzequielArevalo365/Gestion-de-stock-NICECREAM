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
  class Maquina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Este método permite definir las asociaciones entre los modelos, es decir, las relaciones entre las tablas.
      //Por ejemplo en maquinas debo tener belongto pallet, porque muchas máquinas pueden estar en un mismo pallet
      //pero cada máquina solo puede estar en un pallet.
      Maquina.belongsTo(models.Pallet,{
        //La foreignKey se genera del lado de la tabla que va tener la clave foránea, en este caso, la tabla de máquinas va a 
        //tener la clave foránea pallet_id que hace referencia al id del pallet al que pertenece esa máquina.
        foreignKey:'pallet_id',
        as:'pallet'
      })
    }
  }
  //Maquinas.init: Es una función que nos permite definir el modelo de la tabla "Maquinas" con sus atributos y tipos de datos.
  Maquina.init({
    nombre: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    alto: DataTypes.DOUBLE,
    ancho: DataTypes.DOUBLE,
    profundidad: DataTypes.DOUBLE,
    peso: DataTypes.DOUBLE,
    imagen: DataTypes.STRING,
    categoria: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true}
  }, {
    sequelize,
    modelName: 'Maquina',
    timestamps:false
  });
  return Maquina;
};