const passport = require("passport");

// @route GET api/auth/login
// @desc Login user with twitch
// @access Public
const login = (req, res) => {
  passport.authenticate("twitch", { scope: "user_read" });
};

module.exports = {
  login,
};
