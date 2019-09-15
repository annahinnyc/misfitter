const db = require('./db/index.js');

const User = {
  create(user, callback) {
    const queryString = `insert into user (full_name, email, pass) values ('${user.name}', '${user.email}', '${user.password}')`;
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },

  getAll(callback) {
    const queryString = `select * from user`;
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }
};

module.exports = {
  User
};