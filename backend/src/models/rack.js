'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rack.hasMany(models.Pallet,{
        foreignKey:'rack_id',
        as:'pallets'
      })
      Rack.belongsTo(models.Calle,{
        foreignKey:'calle_id',
        as:'calle'
      })
    }
  }
  Rack.init({
    numero: DataTypes.INTEGER,
    lado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rack',
    timestamps:false
  });
  return Rack;
};