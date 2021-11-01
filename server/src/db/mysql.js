import config from '../configs/db.config.json';

const mysql = require('mysql');

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
});

exports.getConnection = (callback) => {
  // eslint-disable-next-line consistent-return
  pool.getConnection((err, conn) => {
    if (err) {
      throw new Error('Unable to connect to database!');
    }
    callback(conn);
  });
};
