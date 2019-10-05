const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const morgan = require('morgan');

const { signInUsers, signUpUsers } = require('./resolvers/index');
const { verifyAuthentication, verifyAuthorization } = require('./middlewares/index');
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

app.use(
  '/:user_id/graphql',
  verifyAuthentication,
  verifyAuthorization,
  graphqlHTTP((req, res, graphQLParams) => ({
    schema,
    context: { user: res.locals.user },
    graphiql: true,
  }))
);

// 404 Resource not found
app.use('*', (req, res, next) => {
  return res.status(404).send({
    error: {
      status: res.statusCode,
      message: "Resource not found"
    }
  });
});

// custom error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({
    error: {
      status: 500 || err.status,
      message: err.message,
    }
  });
});

if (typeof module !== 'undefined' && !module.parent) {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}
