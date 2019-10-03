const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const {
  insertUsers,
  updateUsers,
  deleteUsers,
  insertShops,
  updateShops,
  deleteShops,
  insertRatings,
  updateRatings,
  deleteRatings
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    insert_users: {
      type: GraphQLString,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => insertUsers(parent, args),
    },
    update_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args) => updateUsers(parent, args),
    },
    delete_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => deleteUsers(parent, args),
    },
    insert_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (parent, args) => insertShops(parent, args),
    },
    update_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (parent, args) => updateShops(parent, args),
    },
    delete_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
      },
      resolve: (parent, args) => deleteShops(parent, args),
    },
    insert_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
        shop_id: { type: GraphQLString },
        score: { type: GraphQLInt },
        comment: { type: GraphQLString },
      },
      resolve: (parent, args) => insertRatings(parent, args),
    },
    update_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
        shop_id: { type: GraphQLString },
        score: { type: GraphQLInt },
        comment: { type: GraphQLString },
      },
      resolve: (parent, args) => updateRatings(parent, args),
    },
    delete_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLString },
        shop_id: { type: GraphQLString },
      },
      resolve: (parent, args) => deleteRatings(parent, args),
    },
  },
});
