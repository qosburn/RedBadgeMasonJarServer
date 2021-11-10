const { DataTypes } = require('sequelize');
const db = require('../db');
const Product = db.define('product', {
  productType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  projectOptionChar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productQuantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  productPrice: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inCart: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});
module.exports = Product;
