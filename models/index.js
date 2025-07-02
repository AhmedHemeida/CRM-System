const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false
  }
);

const User = require('./User')(sequelize);
const Customer = require('./Customer')(sequelize);
const Lead = require('./Lead')(sequelize);
const Interaction = require('./Interaction')(sequelize);

User.hasMany(Customer, { foreignKey: 'assignedTo' });
Customer.belongsTo(User, { foreignKey: 'assignedTo' });

User.hasMany(Lead, { foreignKey: 'assignedTo' });
Lead.belongsTo(User, { foreignKey: 'assignedTo' });

Customer.hasMany(Interaction, { foreignKey: 'customerId' });
Interaction.belongsTo(Customer, { foreignKey: 'customerId' });

User.hasMany(Interaction, { foreignKey: 'createdBy' });
Interaction.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = {
  sequelize,
  User,
  Customer,
  Lead,
  Interaction
};
