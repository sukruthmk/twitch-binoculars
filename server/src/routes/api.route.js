const express = require('express');

const router = express.Router();

const APIController = require('../controllers/api.controller');

router.get('/streams/game', APIController.getStreamsPerGame);

module.exports = router;
