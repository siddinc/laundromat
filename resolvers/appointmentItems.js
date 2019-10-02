const knexClient = require('../config/knex');

exports.getAppointmentItems = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointment_items;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAppointmentItemsByPK = async (parent, args) => {
  let result;
  if(args.appointment_id && args.item_type_id) {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE appointment_id = ${args.appointment_id} AND item_type_id = ${args.item_type_id};`);
  } else if(args.appointment_id && !args.item_type_id) {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE appointment_id = ${args.appointment_id};`);
  } else {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE item_type_id = ${args.item_type_id};`);
  }
  return JSON.parse(JSON.stringify(result))[0];
};