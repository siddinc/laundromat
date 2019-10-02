const { GraphQLSchema } = require('graphql');

const rootMutation = require('./rootMutation');
const rootQuery = require('./rootQuery');

module.exports = new GraphQLSchema({
  query: rootQuery,
  // mutation: rootMutation,
});
