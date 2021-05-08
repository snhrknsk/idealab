'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('idealists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      title: {
        type: Sequelize.STRING(128)
      },
      owner: {
        type: Sequelize.STRING(45)
      },
      user_id: {
        type: Sequelize.BIGINT.UNSIGNED
      },
      category: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      good: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      public: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      template_id: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('idealists');
  }
};