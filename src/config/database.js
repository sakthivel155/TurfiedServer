import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Important for cloud-hosted databases
});

// Use this in your models:
export default {
  query: (text, params) => pool.query(text, params),
  pool
};