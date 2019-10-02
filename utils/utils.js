const bcrypt = require('bcrypt');
const shortUUID = require('short-uuid');

const { saltRounds } = require('../config/index');

exports.hashPassword = async plainTextPassword => {
  return bcrypt.hash(plainTextPassword, saltRounds);
};

exports.comparePassword = async plainTextPassword => {
  return bcrypt.compare(plainTextPassword, saltRounds);
};

exports.generateRandomUUID = () => {
  return shortUUID.generate();
};
