require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
async function selectAll() {
  const client = await pool.connect();
  const { rows } = await client.query('SELECT * FROM posts');
  client.release();
  return rows;
}

module.exports = { selectAll };
