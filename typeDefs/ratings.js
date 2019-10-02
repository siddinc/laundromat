const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Ratings',
  fields: {
    user_id: { type: GraphQLString },
    shop_id: { type: GraphQLString },
    score: { type: GraphQLInt },
    comment: { type: GraphQLString },
  },
});
