const got = require('got');
const config = require('../configs/auth.config.json');
const CommonUtils = require('../utils/commonUtils');
const StreamModel = require('../models/stream.model');

const fetchStreams = async (params = {}) => {
  const accessToken = 'kk2thqt0qo661uozsumjjzrpexl9c8';
  try {
    const response = await got({
      url: 'https://api.twitch.tv/helix/streams',
      method: 'GET',
      searchParams: params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-Id': config.TWITCH_CLIENT_ID,
      },
      responseType: 'json',
    });
    return response.body;
  } catch (err) {
    console.log(err.response.body);
  }
  return {};
};

const getAllStreams = async (counter, cursor = null) => {
  if (counter >= 10) return [];
  const streamsInfo = await fetchStreams({
    first: 100,
    after: cursor,
  });
  if (streamsInfo.length === 0) return [];
  console.log(`calling ${counter}`);
  return [
    ...streamsInfo.data,
    ...(await getAllStreams(counter + 1, streamsInfo.pagination.cursor)),
  ];
};

const init = async () => {
  const allStreams = await getAllStreams(0);
  CommonUtils.shuffleArray(allStreams);

  allStreams.forEach(async (stream) => {
    await StreamModel.insert(stream);
  });
};

module.exports = {
  init,
};
