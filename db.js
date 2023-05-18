async function db() {
  const mysql = require("mysql2/promise");

  const config = {
    host: "luca.iran.liara.ir",
    user: "root",
    password: "4MW97jwJbY6rU0pyiuERtAgG",
    database: "opentable",
    port: 30442,
  };

  const pool = mysql.createPool(config);
  return pool;
}

export default db;
