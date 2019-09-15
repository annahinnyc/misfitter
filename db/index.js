const mysql = require('mysql');

let connectionString = process.env.CLEARDB_DATABASE_URL;
let dbURL = process.env.DATABASE_URL;
let dbUserName = process.env.DATABASE_USERNAME;
let dbPassword = process.env.DATABASE_PASSWORD;
let dbName = process.env.DATABASE_NAME;

const pool = mysql.createPool({
  connectionLimi: 10,
  host: dbURL,
  user: dbUserName,
  password: dbPassword,
  database: dbName
});

let formdb = {};

formdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM users`, (err, results) => {
      if (err) { 
        return reject(err); 
      } else {
        console.log('database results received!');
        return resolve(results);
      }
    });
  });
};

module.exports = formdb;