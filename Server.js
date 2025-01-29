const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    return res.status(201).json({ message: "Registration successful!" });
});
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});