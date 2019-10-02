const knexClient = require('../config/knex');

exports.getAddresses = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAddressesByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = ${args.user_id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.userRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users WHERE id = ${parent.user_id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};