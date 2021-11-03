/* eslint-disable camelcase */
const mysql = require('../db/mysql');

const deleteAllStreams = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    mclient.query('DELETE FROM streams', [], async (deleteError) => {
      if (deleteError) {
        throw new Error('Unable to delete user!');
      }
      resolve(true);
    });
    mclient.release();
  });
});

const insert = async (stream) => new Promise((resolve, reject) => {
  const {
    id: stream_id, game_id, game_name, viewer_count, title, user_name, user_id,
  } = stream;
  mysql.getConnection(async (mclient) => {
    const statement = 'INSERT INTO streams(stream_id, game_id, game_name, viewer_count, title, user_name, user_id) VALUES(?,?,?,?,?,?,?)';
    await mclient.query(
      statement,
      [stream_id, game_id, game_name, viewer_count, title, user_name, user_id],
      async (insertError) => {
        if (insertError) {
          reject(new Error('Unable to add stream!'));
        }
        resolve(true);
      },
    );
    mclient.release();
  });
});

const getStreamsPerGame = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT game_id, ANY_VALUE(game_name) AS game_name, count(*) AS count FROM streams GROUP BY game_id ORDER BY count DESC';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getStreamsPerGame');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getHighestViewerPerGame = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT game_id, ANY_VALUE(game_name) AS game_name, MAX(viewer_count) AS max_viewer_count FROM streams GROUP BY game_id ORDER BY max_viewer_count DESC;';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getHighestViewerPerGame');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getMedianViewerCount = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT x.viewer_count from streams x, streams y GROUP BY x.viewer_count HAVING SUM(SIGN(1-SIGN(y.viewer_count-x.viewer_count)))/COUNT(*) > .5 LIMIT 1';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getMedianViewerCount');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getEvenViewerStreams = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT * FROM streams WHERE viewer_count % 2 = 0';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getEvenViewerStreams');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getOddViewerStreams = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT * FROM streams WHERE viewer_count % 2 != 0';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getEvenViewerStreams');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getTop100StreamsASC = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT * FROM streams ORDER BY viewer_count ASC LIMIT 100';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getEvenViewerStreams');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getTop100StreamsDESC = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT * FROM streams ORDER BY viewer_count DESC LIMIT 100';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getEvenViewerStreams');
      }
      resolve(result);
    });
    mclient.release();
  });
});

const getStreamsWithSameViewCount = async () => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    const statement = 'SELECT * FROM streams WHERE viewer_count IN (SELECT viewer_count FROM streams GROUP BY viewer_count HAVING count(*) > 1) ORDER BY viewer_count DESC';
    await mclient.query(statement, [], async (queryError, result) => {
      if (queryError) {
        throw new Error('Unable to query getEvenViewerStreams');
      }
      resolve(result);
    });
    mclient.release();
  });
});

module.exports = {
  insert,
  deleteAllStreams,
  getStreamsPerGame,
  getHighestViewerPerGame,
  getMedianViewerCount,
  getEvenViewerStreams,
  getOddViewerStreams,
  getTop100StreamsASC,
  getTop100StreamsDESC,
  getStreamsWithSameViewCount,
};
