const knexClient = require('./config/knex');

const getData = async () => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = '4CJCWsfNXDdBX97aPC2rsv'`);
  console.log(JSON.parse(JSON.stringify(result))[0][0]);
}

getData();