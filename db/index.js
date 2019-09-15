const mysql = require('mysql');

let connectionString = process.env.DATABASE_URL;
let dbUserName = process.env.DATABASE_USERNAME;
let dbPassword = process.env.DATABASE_PASSWORD;
let dbName = process.env.DATABASE_NAME;

const db = mysql.createConnection({
  host: connectionString,
  username: dbUserName,
  password: dbPassword,
  database: dbName
});

db.connect();

module.exports = db;