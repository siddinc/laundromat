const app = require('express')();
const graphqlHTTP = require('express-graphql');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet = require('helmet');

const { signInUsers, signUpUsers } = require('./resolvers/index');
const verifyAuthentication = require('./middlewares/verifyAuthentication');
const schema = require('./helpers/index');
const { port } = require('./config/index');

app.set('json spaces', 4);

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// morgan
app.use(morgan('dev'));

// helmet
app.use(helmet());
app.use(helmet.noCache());

// cors
app.use(cors());

// routes
app.post('/signup', signUpUsers);

app.post('/signin', signInUsers);

app.use('/graphql', verifyAuthentication, graphqlHTTP((req, res, graphQLParams) => ({
      schema,
      context: { user: res.locals.user },
      graphiql: true,
    })
  )
);

// 404 Resource not found
app.use('*', (req, res, next) => {
  res.status(404).send("Resource not found");
});

if (typeof module !== 'undefined' && !module.parent) {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}
