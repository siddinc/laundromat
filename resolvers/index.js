const { getUsers, getUsersByPK, insertUsers, updateUsers, deleteUsers, userAddressRelationship, userShopRelationship } = require('../resolvers/users');
const { getAddresses, getAddressesByPK, insertAddresses, updateAddresses, deleteAddresses } = require('../resolvers/addresses');
const { getShops, getShopsByPK, insertShops, updateShops, deleteShops, shopAddressRelationship, shopRatingRelationship } = require('../resolvers/shops');
const { getRatings, getRatingsByPK, insertRatings, updateRatings, deleteRatings } = require('../resolvers/ratings');
const { getItemTypes, getItemTypesByPK, insertItemTypes, updateItemTypes, deleteItemTypes } = require('../resolvers/itemTypes');
const { getAppointments, getAppointmentsByPK, insertAppointments, updateAppointments, deleteAppointments, appointmentsAppointmentItemsRelationship } = require('../resolvers/appointments');
const { getAppointmentItems, getAppointmentItemsByPK, insertAppointmentItems, updateAppointmentItems, deleteAppointmentItems, appointmentItemsItemTypeRelationship } = require('../resolvers/appointmentItems');

module.exports = {
  getUsers,
  getUsersByPK,
  insertUsers,
  updateUsers,
  deleteUsers,
  userAddressRelationship,
  userShopRelationship,

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
  shopAddressRelationship,
  shopRatingRelationship,

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
  updateAppointments,
  deleteAppointments,
  appointmentsAppointmentItemsRelationship,

  getAppointmentItems,
  getAppointmentItemsByPK,
  insertAppointmentItems,
  updateAppointmentItems,
  deleteAppointmentItems,
  appointmentItemsItemTypeRelationship,
}