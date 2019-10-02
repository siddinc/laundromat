const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'AppointmentItems',
  fields: {
    appointment_id: { type: GraphQLString },
    item_type_id: { type: GraphQLString },
    quantity: { type: GraphQLInt },
  },
});
