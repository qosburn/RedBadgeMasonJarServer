const User = require('./user');
const Address = require('./address');
const Product = require('./product');
const Cart = require('./cart');
// create individual files for your models and import them here

// Setup Associations
User.hasOne(Address);
Address.belongsTo(User);

User.hasMany(Product);
Product.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

module.exports = {
  User,
  Address,
  Product,
  Cart,
};
