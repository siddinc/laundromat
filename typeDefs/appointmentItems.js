const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const ItemTypesType = require('./itemTypes');
const { appointmentItemsItemTypeRelationship } = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'AppointmentItems',
  fields: {
    appointment_id: { type: GraphQLString },
    item_type_id: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    item_type: {
      type: ItemTypesType,
      resolve: (parent, args) => appointmentItemsItemTypeRelationship(parent, args),
    },
  },
});
