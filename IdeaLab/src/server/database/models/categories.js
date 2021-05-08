'use strict';

module.exports = function(sequelize, DataTypes) {
    var categories = sequelize.define('categories', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
          },
        name: DataTypes.STRING(45),
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        },
        timestamps: false
    });
    return categories;
};
