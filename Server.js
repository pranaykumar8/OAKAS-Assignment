const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// POST /register route handler
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // In a real-world app, you would hash the password and save user details in a database.

    return res.status(201).json({ message: "Registration successful!" });
});

// Start server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});