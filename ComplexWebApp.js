/*
Filename: ComplexWebApp.js

Description: This code represents a complex web application that includes advanced features and functionality.

*/

// Importing required libraries and modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initializing the Express app
const app = express();

// Configuring the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the Schema and Model for the data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// API endpoints

// GET /users - Get all users
app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({ message: 'Error retrieving users' });
    } else {
      res.status(200).json(users);
    }
  });
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).json({ message: 'Error creating user' });
    } else {
      res.status(201).json(user);
    }
  });
});

// PUT /users/:id - Update a user
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Error updating user' });
      } else {
        res.status(200).json(user);
      }
    }
  );
});

// DELETE /users/:id - Delete a user
app.delete('/users/:id', (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting user' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Additional complex logic...

// ... (Add more complex code as needed)

// Exporting the app for testing or use in other modules
module.exports = app;
