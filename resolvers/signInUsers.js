const knexClient = require('../config/knex');
const { comparePassword, createJWT } = require('../utils/utils');

module.exports = async (req, res, next) => {
  const existingUser = await knexClient.raw(`SELECT id, password FROM users WHERE email = '${req.body.email}';`);
  const result = JSON.parse(JSON.stringify(existingUser))[0];

  if(result.length === 0) {
    return res.status(404).send({
      error: {
        status: res.statusCode,
        message: "User does not exist"
      }
    });
  }

  const verifyInputPassword = await comparePassword(req.body.password, result[0].password);

  if(!verifyInputPassword) {
    return res.status(401).send({
      error: {
        status: res.statusCode,
        message: "Incorrect email/password pair"
      } 
    });
  }

  const token = await createJWT({ id: result[0].id, email: req.body.email });
  return res.status(200).send({
    message: "Signin successful",
    data: { token }
  });
};