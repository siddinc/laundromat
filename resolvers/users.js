const knexClient = require('../config/knex');

exports.getUsers = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getUsersByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users WHERE id = ${args.id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};