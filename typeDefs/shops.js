const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const RatingsType = require('./ratings');
const UsersType = require('./users');
const { userRelationship, ratingsRelationship } = require('../resolvers/shops');

module.exports = new GraphQLObjectType({
  name: 'Shops',
  fields: {
    user_id: { type: GraphQLString },
    name: { type: GraphQLString },
    user: {
      type: UsersType,
      resolve: (parent, args) => userRelationship(parent, args),
    },
    ratings: {
      type: new GraphQLList(RatingsType),
      resolve: (parent, args) => ratingsRelationship(parent, args),
    },
  },
});
