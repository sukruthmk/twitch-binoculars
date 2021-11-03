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

const getEvenViewerStreams = async (req, res) => {
  const result = await StreamModel.getEvenViewerStreams();
  res.json(result);
};

const getOddViewerStreams = async (req, res) => {
  const result = await StreamModel.getOddViewerStreams();
  res.json(result);
};

const getStreamsWithSameViewCount = async (req, res) => {
  const result = await StreamModel.getStreamsWithSameViewCount();
  res.json(result);
};

module.exports = {
  getStreamsPerGame,
  getHighestViewerPerGame,
  getMedianViewerCount,
  getEvenViewerStreams,
  getOddViewerStreams,
  getStreamsWithSameViewCount,
};
