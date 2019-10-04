const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Addresses',
  fields: {
    user_id: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
  },
});
