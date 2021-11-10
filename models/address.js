const { DataTypes } = require('sequelize');
const db = require('../db');

const Address = db.define('address', {
  newsLetter: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Address;
