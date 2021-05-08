'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      occupation: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      grade: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      user_type: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};