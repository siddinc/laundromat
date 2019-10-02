const knex = require('./config/knex');

const objectifyRawPacket = row => ({ ...row });

const getData = async () => {
  try {
    const res = await knex('users').select('*');
    const convertedResponse = res.map(objectifyRawPacket);
    console.log(convertedResponse);
  } catch (error) {
    console.log(error);
  }
};

getData();
