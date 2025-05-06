const express = require("express");
const ConnectMongo = require("./db");
const Users = require('./model')

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
ConnectMongo();

// Middleware and routes
app.use(express.json());

// Serve static files from public directory
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
    res.send('Student Registration System');
});

// getting user data
app.get("/users", async (req, res) => {
    try {
        const data = await Users.find({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

// posting user data
app.post("/users", async (req, res) => {
    try {
        const payload = req.body;

        const User = new Users(payload);
        await User.save();

        res.status(200).json({ status: "success" });
    } catch (error) {
        res.send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
