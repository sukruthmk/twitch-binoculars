const StreamModel = require('../models/stream.model');

const getStreamsPerGame = async (req, res) => {
  const result = await StreamModel.getStreamsPerGame();
  res.json(result);
};

const getHighestViewerPerGame = async (req, res) => {
  const result = await StreamModel.getHighestViewerPerGame();
  res.json(result);
};

const getMedianViewerCount = async (req, res) => {
  const result = await StreamModel.getMedianViewerCount();
  res.json(result);
};

module.exports = {
  getStreamsPerGame,
  getHighestViewerPerGame,
  getMedianViewerCount,
};
