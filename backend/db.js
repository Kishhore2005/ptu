const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables

// Log the connection string to check if it's loaded correctly
console.log('DATABASE_URL:', process.env.DATABASE_URL);

// Supabase PostgreSQL Connection URL from `.env`
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }  // Required for Supabase. Remove if not needed.
});

// Check Database Connection
pool.connect()
    .then(() => console.log("✅ Connected to Supabase PostgreSQL"))
    .catch(err => console.error("❌ PostgreSQL Connection Error:", err));

// Ensure Users Table Exists (Create Only If It Doesn't Exist)
const ensureUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password TEXT NOT NULL,  -- Plain text (not recommended, use bcrypt)
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await pool.query(query);
        console.log("✅ Users table is ready (Already exists or created)");
    } catch (err) {
        console.error("❌ Error ensuring Users table:", err);
    }
};

// Run Table Check
ensureUserTable();

module.exports = { pool };
