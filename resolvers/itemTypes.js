const knexClient = require('../config/knex');

exports.getItemTypes = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM item_types;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getItemTypesByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM item_types WHERE type_id = '${args.type_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};