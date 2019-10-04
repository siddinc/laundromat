const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require('graphql');

const AddressesType = require('./addresses');
const { addressRelationship } = require('../resolvers/shops');

module.exports = new GraphQLObjectType({
  name: 'Shops',
  fields: {
    user_id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: {
      type: AddressesType,
      resolve: (parent, args) => addressRelationship(parent, args),
    },
  },
});
