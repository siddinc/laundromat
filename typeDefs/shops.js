const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const AddressesType = require('./addresses');
const RatingsType = require('./ratings');
const {
  shopAddressRelationship,
  shopRatingRelationship,
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Shops',
  fields: {
    user_id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: {
      type: AddressesType,
      resolve: (parent, args) => shopAddressRelationship(parent, args),
    },
    rating: {
      type: new GraphQLList(RatingsType),
      resolve: (parent, args) => shopRatingRelationship(parent, args),
    },
  },
});
