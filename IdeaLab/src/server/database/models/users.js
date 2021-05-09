'use strict';

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true
    },
    name: DataTypes.STRING(128),
    mail: DataTypes.STRING(128),
    occupation: DataTypes.STRING(128),
    password: DataTypes.STRING(256),
    grade: DataTypes.INTEGER.UNSIGNED,
    user_type: DataTypes.INTEGER.UNSIGNED,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  }, {
      underscored: true,
      classMethods: {
          associate: function(models) {
              // associations can be defined here
          }
      },
      // timestamps: false
  });
  return users;
};
