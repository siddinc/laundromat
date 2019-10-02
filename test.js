const knex = require('./config/knex');



const getData = async () => {
  try {
    const res = await knex('users').where('id', 1);
    console.log(JSON.parse(JSON.stringify(res)));
  } catch (error) {
    console.log(error);
  }
};

getData();
