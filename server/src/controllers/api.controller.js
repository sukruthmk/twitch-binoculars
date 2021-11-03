const StreamModel = require('../models/stream.model');

const getStreamsPerGame = async (req, res) => {
  const result = await StreamModel.getStreamsPerGame();
  res.json(result);
};

module.exports = {
  getStreamsPerGame,
};
