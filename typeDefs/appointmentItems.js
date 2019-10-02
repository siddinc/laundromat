const { GraphQLObjectType, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'AppointmentItems',
  fields: {
    appointment_id: { type: GraphQLInt },
    item_type_id: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
  },
});
