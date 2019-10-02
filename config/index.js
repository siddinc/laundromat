'use strict';

const path = require('path');
const parsedEnv = require('dotenv').config({
  path: path.join(__dirname, '../.env.development'),
});

if (parsedEnv.error) {
  throw parsedEnv.error;
}

const config = {
  port: Number(process.env.PORT),
  databaseHost: process.env.DATABASE_HOST,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
};

module.exports = config;
