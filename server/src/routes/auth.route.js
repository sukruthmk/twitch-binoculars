const express = require('express');
const passport = require('passport');

const router = express.Router();

const AuthController = require('../controllers/auth.controller');

router.get('/login', passport.authenticate('twitch', { scope: 'user_read' }));
router.get(
  '/callback',
  passport.authenticate('twitch', {
    successRedirect: '/auth/redirect',
    failureRedirect: '/auth/redirect',
  }),
);
router.get('/redirect', AuthController.redirect);

module.exports = router;
