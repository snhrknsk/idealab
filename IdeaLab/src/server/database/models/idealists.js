'use strict';

module.exports = function(sequelize, DataTypes) {
  var idealists = sequelize.define('idealists', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true
    },
    title: DataTypes.STRING(128),
    owner: DataTypes.STRING(45),
    user_id: DataTypes.BIGINT.UNSIGNED,
    category: DataTypes.INTEGER.UNSIGNED,
    good: DataTypes.INTEGER.UNSIGNED,
    public: DataTypes.INTEGER.UNSIGNED,
    template_id: DataTypes.INTEGER.UNSIGNED,
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
  return idealists;
};
