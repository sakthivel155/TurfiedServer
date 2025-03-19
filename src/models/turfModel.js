import db from '../config/database.js';

export const getTurfs = async () => {
  const result = await db.query('SELECT * FROM turfs');
  return result.rows;
};

