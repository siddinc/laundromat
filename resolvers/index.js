const { getUsers, getUsersByPK, insertUsers, updateUsers, deleteUsers } = require('../resolvers/users');
const { getAddresses, getAddressesByPK } = require('../resolvers/addresses');
const { getShops, getShopsByPK, insertShops, updateShops, deleteShops } = require('../resolvers/shops');
const { getRatings, getRatingsByPK, insertRatings, updateRatings, deleteRatings } = require('../resolvers/ratings');
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
  insertShops,
  updateShops,
  deleteShops,
  getRatings,
  getRatingsByPK,
  insertRatings,
  updateRatings,
  deleteRatings,
  getItemTypes,
  getItemTypesByPK,
  getAppointments,
  getAppointmentsByPK,
  getAppointmentItems,
  getAppointmentItemsByPK,
}