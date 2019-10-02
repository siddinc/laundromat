const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ItemTypes',
  fields: {
    type_id: { type: GraphQLString },
    name: { type: GraphQLString },
    ironing_price: { type: GraphQLFloat },
    dry_cleaning_price: { type: GraphQLFloat },
  },
});
