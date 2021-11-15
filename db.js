const { Sequelize } = require('sequelize');

const Sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  // Added
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
    // End Add
  },
});

// old stuff
// const db = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   // Added
//     dialectOptions: {
//           ssl:{
//                   require: true,
//                   rejectUnauthorized: false
//               }
//               // End Add
//   }
// });

module.exports = db;
