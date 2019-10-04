const knexClient = require('../config/knex');

exports.getAppointments = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAppointmentsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments WHERE appointment_id = '${args.appointment_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertAppointments = async (parent, args) => {
  const existingAppointments = await knexClient.raw(`SELECT appointment_id FROM appointments WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointments))[0].length !== 0) {
    return `Appointment already exists`;
  }

  const id = generateRandomUUID();

  await knexClient.raw(`INSERT INTO appointments (appointment_id, user_id, shop_id, address_id) VALUES ('${id}', '${args.user_id}', '${args.shop_id}', '${args.address_id}');`);
  return "New appointment created successfully";
};

exports.deleteAppointments = async (parent, args) => {
  const existingAppointments = await knexClient.raw(`SELECT appointment_id FROM appointments WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointments))[0].length === 0) {
    return `Appointment doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM appointments WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);
  return "Appointment deleted successfully";
};
