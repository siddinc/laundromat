const {
  databaseHost,
  databaseName,
  databasePassword,
  databaseUser,
} = require('../config/index');

module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    database: databaseName,
  },
  pool: { min: 0, max: 7 },
});
