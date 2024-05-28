const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRoutes);

// Connect to MongoDB local server
const mongoUri = 'mongodb://localhost:27017/users';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB on localhost');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
