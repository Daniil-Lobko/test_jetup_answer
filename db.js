const Pool = require('pg').Pool
const pool = new Pool({
  user: "daniil",
  password: "1121",
  host: "localhost",
  port: 5432,
  database: "node_postgres"
})

module.exports = pool