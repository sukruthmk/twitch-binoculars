const express = require('express');

const router = express.Router();

const APIController = require('../controllers/api.controller');

router.get('/streams/game', APIController.getStreamsPerGame);
router.get('/viewer/game/high', APIController.getHighestViewerPerGame);
router.get('/viewer/median', APIController.getMedianViewerCount);

module.exports = router;
