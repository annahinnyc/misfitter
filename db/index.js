const mysql = require('mysql');

let connectionString = process.env.CLEARDB_DATABASE_URL;
let dbURL = process.env.DATABASE_URL;
let dbUserName = process.env.DATABASE_USERNAME;
let dbPassword = process.env.DATABASE_PASSWORD;
let dbName = process.env.DATABASE_NAME;

const db = mysql.createPool({
  host: dbURL,
  user: dbUserName,
  password: dbPassword,
  database: dbName
});

db.query(`SELECT * FROM ${dbName}`, function(err, results) {
  if (err) { 
    throw err; 
  } else {
    console.log('database results received!' + results);
  }
});

module.exports = db;