const mysql = require('mysql');

let connectionString = process.env.CLEARDB_DATABASE_URL;

const db = mysql.createConnection({
  host: connectionString,
  database: 'users'
});

db.connect();

module.exports = db;