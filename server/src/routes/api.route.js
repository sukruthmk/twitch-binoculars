const express = require('express');

const router = express.Router();

const APIController = require('../controllers/api.controller');

router.get('/streams/game', APIController.getStreamsPerGame);
router.get('/streams/even', APIController.getEvenViewerStreams);
router.get('/streams/odd', APIController.getOddViewerStreams);
router.get('/streams/top100/asc', APIController.getTop100StreamsASC);
router.get('/streams/top100/desc', APIController.getTop100StreamsDESC);

router.get('/viewer/game/high', APIController.getHighestViewerPerGame);
router.get('/viewer/median', APIController.getMedianViewerCount);
router.get('/viewer/same/count', APIController.getStreamsWithSameViewCount);

module.exports = router;
