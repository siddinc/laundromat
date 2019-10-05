const knexClient = require('../config/knex');
const { verifyJWT, extractJWT } = require('../utils/utils');

module.exports = async (req, res, next) => {
  const token = extractJWT(req);

  if(!token) {
    return res.status(400).send({
      authentication: false,
      error: {
        status: res.statusCode,
        message: "No JWT provided",
      }
    });
  }

  const payload = await verifyJWT(token);
  const result = await knexClient.raw(`SELECT id, name, email, is_shop_owner FROM users WHERE id = '${payload.id}' AND email = '${payload.email}';`);
  const existingUser = JSON.parse(JSON.stringify(result))[0];

  if(existingUser.length === 0) {
    res.status(404).send({
      authentication: false,
      error: {
        status: res.statusCode,
        message: "User does not exist",
      }
    });
  }else {
    res.locals.user = existingUser[0];
    next();
  }
};
