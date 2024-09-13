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
    required: true 
  },
  username: { 
    type: String, 
    required: true // Ensure thread is tied to a user 
  },
  comments: [CommentSchema]
}, { timestamps: true });

const ThreadModel = mongoose.model('Thread', ThreadSchema);

// Fetch all threads (visible to everyone)
app.get('/api/threads', async (req, res) => {
  try {
    const threads = await ThreadModel.find(); // Fetch all threads
    res.json(threads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch threads' });
  }
});

// Create a new thread with username
app.post('/api/threads', async (req, res) => {
  const { content, username } = req.body;

  if (!username || !content) {
    return res.status(400).json({ success: false, message: 'Username and content are required' });
  }

  const newThread = new ThreadModel({ content, username });
  await newThread.save();
  res.status(201).json(newThread);
});

// Post a Comment to Thread
app.post('/api/threads/:threadId/comments', async (req, res) => {
  const { content, username } = req.body;
  const thread = await ThreadModel.findById(req.params.threadId);

  if (!thread) {
    return res.status(404).json({ message: 'Thread not found' });
  }

  if (!username || !content) {
    return res.status(400).json({ message: 'Username and content are required' });
  }

  thread.comments.push({ content, username });
  await thread.save();
  res.status(201).json(thread.comments[thread.comments.length - 1]);
});

// Find and Delete a Thread
app.delete('/api/threads/:threadId', async (req, res) => {
  const { username } = req.body;
  const thread = await ThreadModel.findById(req.params.threadId);

  if (!thread) {
    return res.status(404).json({ message: 'Thread not found' });
  }

  // Check if the logged-in user is the creator of the thread
  if (thread.username !== username) {
    return res.status(403).json({ message: 'Unauthorized: Only the creator can delete this thread' });
  }

  await thread.remove(); // Remove the thread if the user is authorized
  res.status(200).json({ message: 'Thread deleted successfully' });
});


// ^^ basic CRUD operations (Read, Create, Update (with comments), Delete)

//////////////////////////////////////////////////////////////////////////////

// Run backend

if(process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}
module.exports = app;
