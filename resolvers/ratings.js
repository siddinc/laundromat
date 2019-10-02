const knexClient = require('../config/knex');

exports.getRatings = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM ratings;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getRatingsByPK = async (parent, args) => {
  let result;
  if(args.user_id && args.shop_id) {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE user_id = ${args.user_id} AND shop_id = ${args.shop_id};`);
  } else if(args.user_id && !args.shop_id) {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE user_id = ${args.user_id};`);
  } else {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE shop_id = ${args.shop_id};`);
  }
  return JSON.parse(JSON.stringify(result))[0];
};