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
  });
});

module.exports = {
  insert,
  deleteAllStreams,
};
