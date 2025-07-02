const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Lead', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('new', 'contacted', 'qualified', 'lost'),
      defaultValue: 'new'
    },
    assignedTo: {
      type: DataTypes.INTEGER
    }
  });
};
