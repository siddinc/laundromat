const { GraphQLObjectType, GraphQLString } = require('graphql');

const { AddressesType, ShopsType } = require('../typeDefs/index');
const { addressRelationship, shopRelationship } = require('../resolvers/users');

module.exports = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLString },
    // address: {
    //   type: AddressesType,
    //   resolve: (parent, args) => addressRelationship(parent, args),
    // },
    // shop: {
    //   type: ShopsType,
    //   resolve: (parent, args) => shopRelationship(parent, args),
    // },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});
