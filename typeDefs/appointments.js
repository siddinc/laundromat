const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const AppointmentItemsType = require('./appointmentItems');
const { appointmentsAppointmentItemsRelationship } = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Appointments',
  fields: {
    appointment_id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    shop_id: { type: GraphQLString },
    scheduled_for: { type: GraphQLString },
    created_at: { type: GraphQLString },
    appointment_items: {
      type: new GraphQLList(AppointmentItemsType),
      resolve: (parent, args) => appointmentsAppointmentItemsRelationship(parent, args),
    },
  },
});
