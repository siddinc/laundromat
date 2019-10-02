const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const RatingsType = require('./ratings');
const UsersType = require('./users');

module.exports = new GraphQLObjectType({
  name: 'Shops',
  fields: {
    user_id: { type: GraphQLInt },
    name: { type: GraphQLString },
    user: {
      type: UsersType,
      resolve: (parent, args) => getUser(parent, args),
    },
    ratings: {
      type: new GraphQLList(RatingsType),
      resolve: (parent, args) => getRatings(parent, args),
    },
  },
});
