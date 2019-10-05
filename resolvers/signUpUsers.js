const knexClient = require('../config/knex');
const { generateRandomUUID, hashPassword, createJWT } = require('../utils/utils');

module.exports = async (req, res, next) => {
  const existingUser = await knexClient.raw(`SELECT id FROM users WHERE email = '${req.body.email}';`);

  if(JSON.parse(JSON.stringify(existingUser))[0].length !== 0) {
    return res.status(409).send({
      error: {
        status: res.statusCode,
        message: "User already exists"
      }
    });
  }

  const id = generateRandomUUID();
  const hashedPassword = await hashPassword(req.body.password);
  await knexClient.raw(`INSERT INTO users VALUES ('${id}', '${req.body.name}', '${hashedPassword}', '${req.body.email}', ${req.body.is_shop_owner});`);

  const token = await createJWT({ id, email: req.body.email });
  return res.status(200).send({
    status: res.statusCode,
    message: "Signup successful",
    data: { token }
  });
};