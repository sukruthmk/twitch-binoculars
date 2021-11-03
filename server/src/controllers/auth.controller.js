const config = require('../configs/auth.config.json');

// @route POST auth/redirect
// @desc used to redirect back to client application
// @access Public
const redirect = (req, res) => {
  const { user } = req.session.passport;
  if (user) {
    const { accessToken } = user;
    res.redirect(`${config.REDIRECT_CLIENT_URL}?accessToken=${accessToken}`);
  }
  res.redirect(config.REDIRECT_CLIENT_URL);
};

module.exports = {
  redirect,
};
