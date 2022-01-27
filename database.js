const mysql = require("mysql");
  
// Database credentials
const hostname = '127.0.0.1',
    username = "root",
    password = "Adiios007",
    port = "3306",
    databsename = "Assignment"
  
  
// Establish connection to the database
let conn = mysql.createConnection({
    host: hostname,
    user: username,
    port: port,
    password: password,
    database: databsename,
});
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
module.exports = conn;    