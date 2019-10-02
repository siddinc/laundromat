const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Ratings',
  fields: {
    user_id: { type: GraphQLInt },
    shop_id: { type: GraphQLInt },
    score: { type: GraphQLInt },
    comment: { type: GraphQLString },
  },
});
