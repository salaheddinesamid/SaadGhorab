var mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'samidsamid',
    database: 'Client'
  })

module.exports = connection;