const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const AddressesType = require('./addresses');
const ShopsType = require('./shops');
const { userAddressRelationship, userShopRelationship } = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    is_shop_owner: { type: GraphQLBoolean },
    shop: {
      type: ShopsType,
      resolve: (parent, args) => userShopRelationship(parent, args),
    },
    address: {
      type: AddressesType,
      resolve: (parent, args) => userAddressRelationship(parent, args),
    },
  },
});
