//add detailed comments to each significant line
// BACKEND

require('dotenv').config();

const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');

const bcrypt = require('bcrypt'); // for password hashing (security)

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB connection
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(cors()); // middleware, connecting to https
app.use(express.json()); //express reads json files
app.use(express.urlencoded({extended:true})); //url to express

///////////////////////////////////////////////////////////////

// Gets data from json file (given api healthcare site)
app.get('/api/glossary', async (req, res) => {
  try {
    const response = await axios.get('https://www.healthcare.gov/api/glossary.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

///////////////////////////////////////////////////////////////

// set up username and password
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Defines user
const UserModel = mongoose.model('User', UserSchema);

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// Register route for creating new users
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10); //10 rounds of hashing

  const newUser = new UserModel({ username, password: hashedPass });
// 500 is error; 201 is successful (created)
  newUser.save()
    .then(() => res.status(201).json({ success: true, message: 'User registered' }))
    .catch(() => res.status(500).json({ success: false, message: 'Server error' }));
});

//////////////////////////////////////////////////////////////////////////////////////

// Comment Schema
const CommentSchema = new mongoose.Schema({
  content: { 
    type: String, 
    required: true }
});

// Thread Schema
const ThreadSchema = new mongoose.Schema({
  content: { 
    type: String, 
    required: true },
    comments: [CommentSchema]
}, { timestamps: true }); //possibly make thread id equal to time?

const ThreadModel = mongoose.model('Thread', ThreadSchema);

// Get all threads (to display)
app.get('/api/threads', async (req, res) => {
  const threads = await ThreadModel.find();
  res.json(threads);
});

// Create a new Thread 
app.post('/api/threads', async (req, res) => {
  const newThread = new ThreadModel({ content: req.body.content });
  await newThread.save();
  res.status(201).json(newThread);
});

// Post a Comment to Thread
app.post('/api/threads/:threadId/comments', async (req, res) => {
  const thread = await ThreadModel.findById(req.params.threadId);
  if (!thread) {
    return res.status(404).json({ message: 'Thread not found' });
  }
  thread.comments.push({ content: req.body.content });
  await thread.save();
  res.status(201).json(thread.comments[thread.comments.length - 1]);
  // push comment to end of array
});

// Find and Delete a Thread
app.delete('/api/threads/:threadId', async (req, res) => {
  try {
    const thread = await ThreadModel.findByIdAndDelete(req.params.threadId);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.status(200).json({ message: 'Thread deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// ^^ basic CRUD operations (Read, Create, Update (with comments), Delete)

//////////////////////////////////////////////////////////////////////////////

// Run backend
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
