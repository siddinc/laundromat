const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const {
  AddressesType,
  AppointmentsType,
  AppointmentItemsType,
  ItemTypesType,
  RatingsType,
  ShopsType,
  UsersType,
} = require('../typeDefs/index');

const { getUsers, getUsersByPK } = require('../resolvers/users');
const { getAddresses, getAddressesByPK } = require('../resolvers/addresses');

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
        user_id: { type: GraphQLInt },
      },
      resolve: (parent, args) => getAddressesByPK(parent, args),
    },
    // appointment_items: {
    //   type: new GraphQLList(AppointmentItemsType),
    //   resolve: (parent, args) => getAppointmentItems(parent, args),
    // },
    // appointment_items_by_pk: {
    //   type: AppointmentItemsType,
    //   args: {
    //     appointment_id: { type: GraphQLInt },
    //     item_type_id: { type: GraphQLInt },
    //   },
    //   resolve: (parent, args) => getAppointmentItemsByPK(parent, args),
    // },
    // appointments: {
    //   type: new GraphQLList(AppointmentsType),
    //   resolve: (parent, args) => getAppointments(parent, args),
    // },
    // appointments_by_pk: {
    //   type: AppointmentsType,
    //   args: {
    //     appointment_id: { type: GraphQLInt },
    //   },
    //   resolve: (parent, args) => getAppointmentsByPK(parent, args),
    // },
    // item_types: {
    //   type: new GraphQLList(ItemTypesType),
    //   resolve: (parent, args) => getItemTypes(parent, args),
    // },
    // item_types_by_pk: {
    //   type: ItemTypesType,
    //   args: {
    //     type_id: { type: GraphQLInt },
    //   },
    //   resolve: (parent, args) => getItemTypesByPK(parent, args),
    // },
    // ratings: {
    //   type: new GraphQLList(RatingsType),
    //   resolve: (parent, args) => getRatings(parent, args),
    // },
    // ratings_by_pk: {
    //   type: RatingsType,
    //   args: {
    //     customer_id: { type: GraphQLInt },
    //     shop_id: { GraphQLInt },
    //   },
    //   resolve: (parent, args) => getRatingsByPK(parent, args),
    // },
    // shops: {
    //   type: new GraphQLList(ShopsType),
    //   resolve: (parent, args) => getShops(parent, args),
    // },
    // shops_by_pk: {
    //   type: ShopsType,
    //   args: {
    //     user_id: { GraphQLInt },
    //   },
    //   resolve: (parent, args) => getShopsByPK(parent, args),
    // },
    users: {
      type: new GraphQLList(UsersType),
      resolve: (parent, args) => getUsers(parent, args),
    },
    users_by_pk: {
      type: UsersType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => getUsersByPK(parent, args),
    },
  },
});
