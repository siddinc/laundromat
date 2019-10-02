const knexClient = require('../config/knex');

exports.getAppointments = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAppointmentsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments WHERE appointment_id = ${args.appointment_id};`);
  return JSON.parse(JSON.stringify(result))[0][0];
};