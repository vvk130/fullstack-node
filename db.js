require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.ELEPHANTSQL_URL,
});

console.log("Database running");

(async () => {
  const { rows } = await pool.query('SELECT * FROM product')
  console.log(rows);
})();

