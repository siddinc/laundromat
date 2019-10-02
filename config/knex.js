const {
  databaseHost,
  databaseUser,
  databasePassword,
  databaseName,
} = require('../config/index');

module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    database: databaseName,
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.query('SET timezone="UTC";', err => {
    //       if (err) {
    //         done(err, conn);
    //       } else {
    //         console.log('DB connection successful');
    //       }
    //     });
    //   },
    // },
  },
});
