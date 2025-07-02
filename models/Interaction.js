const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Interaction', {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('call', 'meeting', 'email', 'note'),
      defaultValue: 'note'
    },
    content: {
      type: DataTypes.TEXT
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
