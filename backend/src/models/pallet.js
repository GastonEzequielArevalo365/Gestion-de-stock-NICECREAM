'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Aquí usamos hasMany porque un pallet puede tener muchas máquinas, pero cada máquina solo puede estar en un pallet, entonces
      // en el modelo de máquinas usamos belongsTo y en el modelo de pallet usamos hasMany.
      Pallet.hasMany(models.Maquina,{
        foreignKey:'pallet_id',
        as:'maquinas'
      })
      Pallet.belongsTo(models.Rack,{
        foreignKey:'rack_id',
        as:'rack'
      })
    }
  }
  Pallet.init({
    nombre: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
    fila: DataTypes.INTEGER,
    columna: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pallet',
    timestamps:false
  });
  return Pallet;
};