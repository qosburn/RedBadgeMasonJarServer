const { DataTypes } = require('sequelize');
const db = require('../db');
const Cart = db.define('cart', {
  projectCartQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productCartOptionChar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCartOptions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCartNotes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = Cart;
