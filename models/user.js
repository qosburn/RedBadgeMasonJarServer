const { DataTypes } = require('sequelize');
const db = require('../db');
// Example UserTable Build this out Need more columns add it here
const User = db.define('user', {
  // username: {
  //   type: DataTypes.STRING(100),
  //   allowNull: false,
  //   unique: true,
  // },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passwordhash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
