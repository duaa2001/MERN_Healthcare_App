require('dotenv').config();
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB connection
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(cors()); // middleware, connecting to https
app.use(express.json()); //express reads json files
app.use(express.urlencoded({extended:true})); //url to express

const NoteSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
  },
  content: {
      type: String,
      required: true,
  },
  url: {
    type: String,
    required: true,
    default: 'N/A'
},
},
{
      timestamps:true
});

const NoteModel = mongoose.model('Note',NoteSchema);

app.get('/api/fetch-glossary', async (req, res) => {
  try {
    const response = await axios.get('https://www.healthcare.gov/api/glossary.json');
    const terms = response.data.glossary;

    const savedTerms = await NoteModel.insertMany(terms.map(term => ({
      title: term.title,
      content: term.content,
      url: term.url || 'N/A',
    })));

    console.log('Inserted terms:', savedTerms);

    res.json({data: savedTerms });
  } catch (error) {
    res.status(500).json({error: error.message });
  }
});

app.get('/api/glossary', async (req, res) => {
  try {
    const terms = await NoteModel.find();
    console.log('Retrieved terms:', terms); // Add this line
    res.json({ data: terms });
  } catch (error) {
    res.status(500).json({error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
