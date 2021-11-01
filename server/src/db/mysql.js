const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
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
