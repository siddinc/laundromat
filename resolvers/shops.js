const knexClient = require('../config/knex');

exports.getShops = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getShopsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops WHERE user_id = ${args.user_id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.userRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users WHERE id = ${parent.user_id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.ratingsRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM ratings WHERE shop_id = ${parent.user_id};`);
  return JSON.parse(JSON.stringify(result))[0];
};