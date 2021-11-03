const StreamModel = require('../models/stream.model');

// @route GET api/streams/game
// @desc used to get number of streams per game
// @access Secured
const getStreamsPerGame = async (req, res) => {
  const result = await StreamModel.getStreamsPerGame();
  res.json(result);
};

// @route GET api/viewer/game/high
// @desc get max view count per game
// @access Secured
const getHighestViewerPerGame = async (req, res) => {
  const result = await StreamModel.getHighestViewerPerGame();
  res.json(result);
};

// @route GET api/viewer/median
// @desc get Median viewer count
// @access Secured
const getMedianViewerCount = async (req, res) => {
  const result = await StreamModel.getMedianViewerCount();
  res.json(result);
};

// @route GET api/streams/even
// @desc get even viewer streams
// @access Secured
const getEvenViewerStreams = async (req, res) => {
  const result = await StreamModel.getEvenViewerStreams();
  res.json(result);
};

// @route GET api/streams/odd
// @desc get odd viewer streams
// @access Secured
const getOddViewerStreams = async (req, res) => {
  const result = await StreamModel.getOddViewerStreams();
  res.json(result);
};

// @route GET api/viewer/same/count
// @desc get same view count streams
// @access Secured
const getStreamsWithSameViewCount = async (req, res) => {
  const result = await StreamModel.getStreamsWithSameViewCount();
  res.json(result);
};

// @route GET api/streams/top100/asc
// @desc get top 100 streams in asc order of viewer count
// @access Secured
const getTop100StreamsASC = async (req, res) => {
  const result = await StreamModel.getTop100StreamsASC();
  res.json(result);
};

// @route GET api/streams/top100/dec
// @desc get top 100 streams in desc order of viewer count
// @access Secured
const getTop100StreamsDESC = async (req, res) => {
  const result = await StreamModel.getTop100StreamsDESC();
  res.json(result);
};

module.exports = {
  getStreamsPerGame,
  getHighestViewerPerGame,
  getMedianViewerCount,
  getEvenViewerStreams,
  getOddViewerStreams,
  getStreamsWithSameViewCount,
  getTop100StreamsASC,
  getTop100StreamsDESC,
};
