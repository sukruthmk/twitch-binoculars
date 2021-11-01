/* eslint-disable camelcase */
const mysql = require('../db/mysql');

const deleteUser = async (twitchid) => {
  mysql.getConnection(async (mclient) => {
    mclient.query('DELETE FROM users WHERE twitchid=?', [twitchid], async (deleteError) => {
      if (deleteError) {
        throw new Error('Unable to delete user!');
      }
      return true;
    });
  });
};

const insert = async (profile) => {
  mysql.getConnection(async (mclient) => {
    const userData = profile.data[0];
    const {
      id, login, display_name, email, profile_image_url,
    } = userData;

    // delete user if already exists
    await deleteUser(id);

    // then create new user
    const statement = 'INSERT INTO users(twitchid, login, display_name, email, profile_image_url, access_token, refresh_token) VALUES(?,?,?,?,?,?,?,?)';
    const user = [
      id,
      login,
      display_name,
      email,
      profile_image_url,
      profile.accessToken,
      profile.refreshToken,
    ];
    mclient.query(statement, user, async (insertError) => {
      if (insertError) {
        throw new Error('Unable to add user!');
      }
      return true;
    });
  });
};

module.exports = {
  insert,
  deleteUser,
};
