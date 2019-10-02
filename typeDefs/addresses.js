const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require('graphql');

const UsersType = require('./users');
const { userRelationship } = require('../resolvers/addresses');

module.exports = new GraphQLObjectType({
  name: 'Addresses',
  fields: {
    user_id: { type: GraphQLInt },
    user: {
      type: UsersType,
      resolve: (parent, args) => userRelationship(parent, args),
    },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
  },
});
