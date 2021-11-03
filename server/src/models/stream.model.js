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

const insert = async (stream) => new Promise((resolve) => {
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
          console.log(insertError);
          throw new Error('Unable to add stream!');
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
    await mclient.query(
      statement,
      [],
      async (queryError, result) => {
        if (queryError) {
          throw new Error('Unable to query getStreamsPerGame');
        }
        resolve(result);
      },
    );
    mclient.release();
  });
});

module.exports = {
  insert,
  deleteAllStreams,
  getStreamsPerGame,
};
