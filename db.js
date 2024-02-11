require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.ELEPHANTSQL_URL,
  // Free database package allows only 5 concurrent connections
  max: 5, 
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 2000, 
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


console.log("Database running");

module.exports = { pool };
