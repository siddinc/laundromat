const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const {
  AddressesType,
  AppointmentItemsType,
  AppointmentsType,
  ItemTypesType,
  RatingsType,
  ShopsType,
  UsersType,
} = require('../typeDefs/index');
const {
  getAddresses,
  getAddressesByPK,

  getAppointmentItems,
  getAppointmentItemsByPK,

  getAppointments,
  getAppointmentsByPK,
  
  getItemTypes,
  getItemTypesByPK,

  getRatings,
  getRatingsByPK,

  getShops,
  getShopsByPK,

  getUsers,
  getUsersByPK,
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    addresses: {
      type: new GraphQLList(AddressesType),
      resolve: (parent, args) => getAddresses(parent, args),
    },
    addresses_by_pk: {
      type: AddressesType,
      args: {
        user_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getAddressesByPK(parent, args),
    },
    appointment_items: {
      type: new GraphQLList(AppointmentItemsType),
      resolve: (parent, args) => getAppointmentItems(parent, args),
    },
    appointment_items_by_pk: {
      type: new GraphQLList(AppointmentItemsType),
      args: {
        appointment_id: { type: GraphQLString },
        item_type_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getAppointmentItemsByPK(parent, args),
    },
    appointments: {
      type: new GraphQLList(AppointmentsType),
      resolve: (parent, args) => getAppointments(parent, args),
    },
    appointments_by_pk: {
      type: AppointmentsType,
      args: {
        appointment_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getAppointmentsByPK(parent, args),
    },
    item_types: {
      type: new GraphQLList(ItemTypesType),
      resolve: (parent, args) => getItemTypes(parent, args),
    },
    item_types_by_pk: {
      type: ItemTypesType,
      args: {
        type_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getItemTypesByPK(parent, args),
    },
    ratings: {
      type: new GraphQLList(RatingsType),
      resolve: (parent, args) => getRatings(parent, args),
    },
    ratings_by_pk: {
      type: new GraphQLList(RatingsType),
      args: {
        user_id: { type: GraphQLString },
        shop_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getRatingsByPK(parent, args),
    },
    shops: {
      type: new GraphQLList(ShopsType),
      resolve: (parent, args) => getShops(parent, args),
    },
    shops_by_pk: {
      type: ShopsType,
      args: {
        shop_id: { type: GraphQLString },
      },
      resolve: (parent, args) => getShopsByPK(parent, args),
    },
    users: {
      type: new GraphQLList(UsersType),
      resolve: (parent, args, context) => getUsers(parent, args)
    },
    users_by_pk: {
      type: UsersType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => getUsersByPK(parent, args),
    },
  },
});
