const passport = require('passport');

// @route GET api/auth/login
// @desc Login user with twitch
// @access Public
const login = () => {
  passport.authenticate('twitch', { scope: 'user_read' });
};

const callback = () => {
  passport.authenticate('twitch', {
    successRedirect: '/',
    failureRedirect: '/',
  });
};

module.exports = {
  login,
  callback,
};
