const app = require('express')();
const graphqlHTTP = require('express-graphql');
const morgan = require('morgan');

const schema = require('./helpers/index');
const { port } = require('./config/index');

app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server listening on port ${port}`));
