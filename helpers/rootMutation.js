const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const { insertUsers, updateUsers, deleteUsers } = require('../resolvers/users');

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    insert_users: {
      type: GraphQLString,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => insertUsers(parent, args),
    },
    update_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args) => updateUsers(parent, args),
    },
    delete_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => deleteUsers(parent, args),
    },
  },
});
