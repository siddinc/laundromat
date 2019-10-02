const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Appointments',
  fields: {
    appointment_id: { type: GraphQLInt },
    user_id: { type: GraphQLInt },
    shop_id: { type: GraphQLInt },
    address_id: { type: GraphQLInt },
    scheduled_for: { type: GraphQLString },
    created_at: { type: GraphQLString },
  },
});
