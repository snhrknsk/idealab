'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.STRING(45)
      },
      description: {
        type: Sequelize.STRING(512)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('templates');
  }
};