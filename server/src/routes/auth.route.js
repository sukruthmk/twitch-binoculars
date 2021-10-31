const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', passport.authenticate('twitch', { scope: 'user_read' }));
router.get(
  '/callback',
  passport.authenticate('twitch', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
);

module.exports = router;
