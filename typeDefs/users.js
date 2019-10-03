const { GraphQLObjectType, GraphQLString } = require('graphql');

const { AddressesType, ShopsType } = require('../typeDefs/index');
const { addressRelationship, shopRelationship } = require('../resolvers/users');

module.exports = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLString },
    shop_id: { type: GraphQLString },
    address_id: { type: GraphQLString },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});
