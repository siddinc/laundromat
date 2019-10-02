const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});
