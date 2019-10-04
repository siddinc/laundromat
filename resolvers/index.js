const { getUsers, getUsersByPK, insertUsers, updateUsers, deleteUsers, shopRelationship, addressRelationship } = require('../resolvers/users');
const { getAddresses, getAddressesByPK, insertAddresses, updateAddresses, deleteAddresses } = require('../resolvers/addresses');
const { getShops, getShopsByPK, insertShops, updateShops, deleteShops } = require('../resolvers/shops');
const { getRatings, getRatingsByPK, insertRatings, updateRatings, deleteRatings } = require('../resolvers/ratings');
const { getItemTypes, getItemTypesByPK, insertItemTypes, updateItemTypes, deleteItemTypes } = require('../resolvers/itemTypes');
const { getAppointments, getAppointmentsByPK, insertAppointments, deleteAppointments } = require('../resolvers/appointments');
const { getAppointmentItems, getAppointmentItemsByPK, insertAppointmentItems, updateAppointmentItems, deleteAppointmentItems } = require('../resolvers/appointmentItems');

module.exports = {
  getUsers,
  getUsersByPK,
  insertUsers,
  updateUsers,
  deleteUsers,
  shopRelationship,
  addressRelationship,
  getAddresses,
  getAddressesByPK,
  insertAddresses,
  updateAddresses,
  deleteAddresses,
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
  insertItemTypes,
  updateItemTypes,
  deleteItemTypes,
  getAppointments,
  getAppointmentsByPK,
  insertAppointments,
  deleteAppointments,
  getAppointmentItems,
  getAppointmentItemsByPK,
  insertAppointmentItems,
  updateAppointmentItems,
  deleteAppointmentItems,
}