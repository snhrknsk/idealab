'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addConstraint(
        'users',
        {
          fields: ['grade'],
          type: 'foreign key',
          name: 'grade_relation',
          references: {
            table: 'grades',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      ),
      await queryInterface.addConstraint(
        'users',
        {
          fields: ['user_type'],
          type: 'foreign key',
          name: 'user_type_relation',
          references: {
            table: 'user_types',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      ),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
      return[
        await queryInterface.removeConstraint('users', 'grade_relation'),
        await queryInterface.removeIndex('users', 'grade_relation'),
        await queryInterface.removeConstraint('users', 'user_type_relation'),
        await queryInterface.removeIndex('users', 'user_type_relation'),
      ]
  }
};