import db from '../config/database.js';
import bcrypt from 'bcryptjs';

export const createUser = async (data) => {
    const { email, username, password } = data;
    // If we reach here, user doesn't exist, proceed with creation
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Write query to insert user data into database
    const query = `
        INSERT INTO users (username, email, password_hash, is_active, is_admin, last_login)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING user_id
    `;
    
    // Execute the query with parameterized values to prevent SQL injection
    const result = await db.query(query, [username, email, hashedPassword, true, false, new Date()]);
    
    console.log('User registered:', result.rows);
    return result.rows[0]; // Return just the first row with the user_id
};

export const userEntry = async (data) => {
  try {
    const { email, password ,username} = data;
    
    const passwordHashQuery = `
      SELECT user_id, password_hash, username FROM users WHERE email = $1 or username = $2 ;
    `;
    
    const result = await db.query(passwordHashQuery, [email,username]);

    
    const userFound = (result.rows[0])
    
    const isPasswordValid = await bcrypt.compare(password, userFound.password_hash);
    
    if (!isPasswordValid) {
      return { found: true, authenticated: false, message: 'Invalid password' };
    }
    return {
      found: true,
      user_id: userFound.user_id,
      username : userFound.username
    }

  } catch (error) {
    console.error('Error in userEntry function:', error);
    throw error;
  }
};

export const isUserExists = async (email, username) => {
    const checkQuery = `
    SELECT * FROM users 
    WHERE email = $1 OR username = $2
    LIMIT 1`;
    
    const checkResult = await db.query(checkQuery, [email, username]);
    
    return checkResult.rows.length > 0;
};