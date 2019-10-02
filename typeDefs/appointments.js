const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Appointments',
  fields: {
    appointment_id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    shop_id: { type: GraphQLString },
    address_id: { type: GraphQLString },
    scheduled_for: { type: GraphQLString },
    created_at: { type: GraphQLString },
  },
});
