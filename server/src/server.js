// import dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

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
    cookie: { maxAge: 3600000 }, // expire after 1 hr
  }),
);
app.use(express.static('public'));

// Passport middleware
app.use(passport.initialize());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Passport config
require('./auth/passport')(passport);

app.use(passport.session());

const AuthRoutes = require('./routes/auth.route');
const APIRoutes = require('./routes/api.route');

// TODO: need to do authenticated flow
// const requireAuth = (req, res, next) => {
//   if (req.session && req.session.passport && req.session.passport.user) {
//     // authenticated flow
//     next();
//   } else {
//     res.send(401);
//   }
// };

app.use('/auth', AuthRoutes);
app.use('/api', APIRoutes);

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get('/', (req, res) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    // authenticated flow
  }
  res.end(JSON.stringify({ success: true }));
});

// process.env.port is Heroku's port if we choose to deploy the app there
const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running at localhost:${port}`);
});
