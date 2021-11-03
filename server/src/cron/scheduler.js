const express = require('express');
const cron = require('node-cron');
const StreamsProcessor = require('./streamsProcessor');

const app = express();

// Schedule tasks to be every 15 mins
cron.schedule('0,15,30,45 * * * *', () => {
  StreamsProcessor.start();
});

StreamsProcessor.init();

app.listen(5000);
