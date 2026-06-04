'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calle.hasMany(models.Rack,{
        foreignKey:'calle_id',
        as:'racks'
      })
    }
  }
  Calle.init({
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calle',
    timestamps:false
  });
  return Calle;
};