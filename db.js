require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.ELEPHANTSQL_URL,
});

console.log("Database running");

module.exports = { pool };
