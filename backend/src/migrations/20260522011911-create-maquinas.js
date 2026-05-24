//Esta carpeta fue generado al utilizar el comando "npx sequelize-cli init", también fue generada la carpeta config
//Dentro de esta carpeta se encuentran los archivos de migración, que son los encargados de crear
//las tablas en la base de datos. En este caso, el archivo "20260522011911-create-maquinas.js" es el
//encargado de crear la tabla "Maquinas" en la base de datos.s
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Maquinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      alto: {
        type: Sequelize.DOUBLE
      },
      ancho: {
        type: Sequelize.DOUBLE
      },
      profundidad: {
        type: Sequelize.DOUBLE
      },
      peso: {
        type: Sequelize.DOUBLE
      },
      imagen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Maquinas');
  }
};