// import dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const schema = require('./graphql/schema');
const session = require("express-session");

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// Load Config
const config = require('./configs/auth.config.json');

app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const AuthRoutes = require('./routes/auth.route');

app.use("/auth", AuthRoutes);

// process.env.port is Heroku's port if we choose to deploy the app there
const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port number ${port}`);
});
