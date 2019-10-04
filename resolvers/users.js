const knexClient = require('../config/knex');
const { generateRandomUUID, hashPassword } = require('../utils/utils');

exports.getUsers = async (parent, args) => {
  const result = await knexClient.raw(`SELECT id, name, email, is_shop_owner FROM users;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getUsersByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT id, name, email, is_shop_owner FROM users WHERE id = '${args.id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertUsers = async (parent, args) => {
  const existingUser = await knexClient.raw(`SELECT id FROM users WHERE email = '${args.email}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length !== 0) {
    return `User already exists`;
  }

  const id = generateRandomUUID();
  const hashedPassword = await hashPassword(args.password);
  await knexClient.raw(`INSERT INTO users VALUES ('${id}', '${args.name}', '${hashedPassword}', '${args.email}', ${args.is_shop_owner});`);
  return "New user created successfully";
};

exports.updateUsers = async (parent, args) => {
  const existingUser = await knexClient.raw(`SELECT id FROM users WHERE id = '${args.id}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length === 0) {
    return `User doesn't exist`;
  }

  if(args.name && args.password) {
    const hashedPassword = await hashPassword(args.password);
    await knexClient.raw(`UPDATE users SET name = '${args.name}', password = '${hashedPassword}' WHERE id = '${args.id}';`);
  } else if(args.name && !args.password) {
    await knexClient.raw(`UPDATE users SET name = '${args.name}' WHERE id = '${args.id}';`);
  } else {
    const hashedPassword = await hashPassword(args.password);
    await knexClient.raw(`UPDATE users SET password = '${hashedPassword}' WHERE id = '${args.id}';`);  
  }
  return "User updated successfully";
};

exports.deleteUsers = async (parent, args) => {
  const existingUser = await knexClient.raw(`SELECT id FROM users WHERE id = '${args.id}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length === 0) {
    return `User doesn't exist`;
  }

  const existingUserShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.id}';`);

  if(JSON.parse(JSON.stringify(existingUserShop))[0].length !== 0) {
    await knexClient.raw(`DELETE FROM shops WHERE user_id = '${args.id}'`);
  }
  
  await knexClient.raw(`DELETE FROM users WHERE id = '${args.id}'`);
  await knexClient.raw(`DELETE FROM addresses WHERE user_id = '${args.id}'`);
  return "User deleted successfully";
};

exports.userAddressRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = '${parent.id}'`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.userShopRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops WHERE user_id = '${parent.id}'`);
  return JSON.parse(JSON.stringify(result))[0][0];
};