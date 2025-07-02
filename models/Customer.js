const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    assignedTo: {
      type: DataTypes.INTEGER
    }
  });
};
