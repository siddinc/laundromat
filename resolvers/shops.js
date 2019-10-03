const knexClient = require('../config/knex');

exports.getShops = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getShopsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops WHERE user_id = '${args.user_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length !== 0) {
    return `Shop already exists`;
  }

  await knexClient.raw(`INSERT INTO shops VALUES ('${args.user_id}', '${args.name}');`);
  await knexClient.raw(`UPDATE users SET shop_id = '${args.user_id}' WHERE id = '${args.user_id}'`);
  return "New shop created successfully";
};

exports.updateShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length === 0) {
    return `Shop doesn't exist`;
  }

  await knexClient.raw(`UPDATE shops SET name = '${args.name}' WHERE user_id = '${args.user_id}';`);
  return "Shop updated successfully";
};

exports.deleteShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length === 0) {
    return `Shop doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM shops WHERE user_id = '${args.user_id}';`);
  await knexClient.raw(`UPDATE users SET shop_id = NULL WHERE id = '${args.user_id}';`);
  return "Shop deleted successfully";
};

exports.userRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users WHERE id = '${parent.user_id};'`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.ratingsRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM ratings WHERE shop_id = '${parent.user_id}';`);
  return JSON.parse(JSON.stringify(result))[0];
};