'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.STRING(45)
      },
      client_id: {
        type: Sequelize.STRING(128)
      },
      secret: {
        type: Sequelize.STRING(128)
      },
      redirect_uri: {
        type: Sequelize.STRING(256)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_types');
  }
};