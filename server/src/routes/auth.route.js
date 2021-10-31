const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/auth.controller');

router.get("/login", AuthController.login);

module.exports = router;
