const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "db",
  user: "root",
  database: "node-complete",
  password: "example",
});

module.exports = pool.promise();
