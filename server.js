const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stitchandstyle', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define User model
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    email: String,
    profilePicture: String
}));

// Middleware to serve static files
app.use(express.static('public'));

// API endpoint to get user data
app.get('/api/user', (req, res) => {
    // For demonstration, let's assume there's a user with this data
    const demoUser = {
        username: 'John Doe',
        email: 'johndoe@example.com',
        profilePicture: ''
    };
    res.json(demoUser);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
