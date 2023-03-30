// require('dotenv').config()


const mysql = require('mysql2')

connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'justtodo',
  password: (process.env.DB_KEY),
  database: 'justtodo'
});

module.exports = connection;