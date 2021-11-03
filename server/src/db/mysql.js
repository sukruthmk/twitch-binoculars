const mysql = require('mysql');
const config = require('../configs/db.config.json');

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  charset: 'utf8mb4',
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
