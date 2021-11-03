/* eslint-disable no-param-reassign */

// JavaScript implementation of the Durstenfeld shuffle,
// an optimized version of Fisher-Yates
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

module.exports = {
  shuffleArray,
};
