'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addConstraint(
        'idealists',
        {
          fields: ['user_id'],
          type: 'foreign key',
          name: 'user_relation',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      ),
      await queryInterface.addConstraint(
        'idealists',
        {
          fields: ['category'],
          type: 'foreign key',
          name: 'category_relation',
          references: {
            table: 'categories',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      ),
      await queryInterface.addConstraint(
        'idealists',
        {
          fields: ['template_id'],
          type: 'foreign key',
          name: 'template_relation',
          references: {
            table: 'templates',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return[
      await queryInterface.removeConstraint('idealists', 'user_relation'),
      await queryInterface.removeIndex('idealists', 'user_relation'),
      await queryInterface.removeConstraint('idealists', 'category_relation'),
      await queryInterface.removeIndex('idealists', 'category_relation'),
      await queryInterface.removeConstraint('idealists', 'template_relation'),
      await queryInterface.removeIndex('idealists', 'template_relation'),
    ]
  }
};
