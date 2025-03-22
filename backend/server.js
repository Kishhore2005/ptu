require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { pool } = require("./db"); // Import Supabase PostgreSQL connection

const app = express();
app.use(cors());

app.use(cors({
  origin: 'https://frontend-3j8pmqlyq-jagadishs-projects-2f7a0795.vercel.app',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json()); // Middleware to parse JSON

// ✅ Test route to check if server is running
app.get("/", (req, res) => {
  res.json({ message: "🎉 API is running!" });
});

console.log('DATABASE_URL:', process.env.DATABASE_URL);
// 📝 User Registration Route
app.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate input fields
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  // Validate password strength (minimum 6 characters)
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long" });
  }

  try {
    // Check if email already exists
    const checkUserQuery = "SELECT * FROM users WHERE email = $1";
    const existingUser = await pool.query(checkUserQuery, [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Insert new user into PostgreSQL (no password hashing)
    const insertUserQuery = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
    await pool.query(insertUserQuery, [name, email, password]);

    res.status(201).json({ message: "✅ Registration successful" });
  } catch (err) {
    console.error("❌ Error inserting user:", err);
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

// 📝 Get Users Route
app.get("/users", async (req, res) => {
  try {
    const usersQuery = "SELECT email, password FROM users"; // Fetch only email & password
    const users = await pool.query(usersQuery);
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

// 🏃 Start Server
// 🏃 Start Server
const PORT = process.env.PORT || 3000;  // 3000 is more common for Vercel
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
