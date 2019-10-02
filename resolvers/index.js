const { getUsers, getUsersByPK, insertUsers, updateUsers, deleteUsers } = require('../resolvers/users');
const { getAddresses, getAddressesByPK } = require('../resolvers/addresses');
const { getShops, getShopsByPK } = require('../resolvers/shops');
const { getRatings, getRatingsByPK } = require('../resolvers/ratings');
const { getItemTypes, getItemTypesByPK } = require('../resolvers/itemTypes');
const { getAppointments, getAppointmentsByPK } = require('../resolvers/appointments');
const { getAppointmentItems, getAppointmentItemsByPK } = require('../resolvers/appointmentItems');

module.exports = {
  getUsers,
  getUsersByPK,
  insertUsers,
  updateUsers,
  deleteUsers,
  getAddresses,
  getAddressesByPK,
  getShops,
  getShopsByPK,
  getRatings,
  getRatingsByPK,
  getItemTypes,
  getItemTypesByPK,
  getAppointments,
  getAppointmentsByPK,
  getAppointmentItems,
  getAppointmentItemsByPK,
}