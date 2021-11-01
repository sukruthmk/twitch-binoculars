/* eslint-disable camelcase */
const mysql = require('../db/mysql');

const deleteUser = async (twitchid) => new Promise((resolve) => {
  mysql.getConnection(async (mclient) => {
    mclient.query('DELETE FROM users WHERE twitchid=?', [twitchid], async (deleteError) => {
      if (deleteError) {
        throw new Error('Unable to delete user!');
      }
      resolve(true);
    });
  });
});

const insert = async (profile) => {
  const userData = profile.data[0];
  const {
    id, login, display_name, email, profile_image_url,
  } = userData;
  // delete user if already exists
  await deleteUser(id);

  return new Promise((resolve) => {
  // then create new user
    mysql.getConnection(async (mclient) => {
      const statement = 'INSERT INTO users(twitchid, login, display_name, email, profile_image_url, access_token, refresh_token) VALUES(?,?,?,?,?,?,?)';
      const user = [
        id,
        login,
        display_name,
        email,
        profile_image_url,
        profile.accessToken,
        profile.refreshToken,
      ];
      await mclient.query(statement, user, async (insertError) => {
        if (insertError) {
          throw new Error('Unable to add user!');
        }
        resolve(true);
      });
    });
  });
};

module.exports = {
  insert,
  deleteUser,
};
