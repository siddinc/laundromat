const knexClient = require('../config/knex');
const { generateRandomUUID, hashPassword } = require('../utils/utils');

exports.getUsers = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getUsersByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM users WHERE id = '${args.id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.addressRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = '${parent.id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.shopRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops WHERE user_id = '${parent.id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertUsers = async (parent, args) => {
  const existingUser = await knexClient.raw(`SELECT id, name FROM users WHERE email = '${args.email}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length !== 0) {
    return `User already exists`;
  }

  const id = generateRandomUUID();
  const hashedPassword = await hashPassword(args.password);
  await knexClient.raw(`INSERT INTO users VALUES ('${id}', '${args.name}', '${hashedPassword}', '${args.email}');`);
  return "New user created successfully";
};

exports.updateUsers = async (parent, args) => {
  const existingUser = await knexClient.raw(`SELECT id, name FROM users WHERE id = '${args.id}';`);

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
  const existingUser = await knexClient.raw(`SELECT id, name FROM users WHERE id = '${args.id}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length === 0) {
    return `User doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM users WHERE id = '${args.id}'`);
  return "User deleted successfully";
};