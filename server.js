const express = require('express');
const path = require('path');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);

// const index = require('./index.js/index')
const PORT = 3001;
const app = express();
const db = require('./db/db.json')
const api = require('./routes/index.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  res.status(200).json(`${req.method} request to write notes received`);

  // Log our request to the terminal
  console.info(`${req.method} note update received`);
});

// POST request to add a review
app.post('/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      tile,
      text,
     
    };

    //jsonNotes noteListItems
    // Obtain existing notes, parse to make objects
    readFromFile('./db/db.json', 'utf8', (err, noteListItems) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(noteListItems);

        // Add a new review
        noteListItems.push(note);

        // Write the note list out 
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated your notes!')
        );
      }
    });

    const response = {
      status: 'success',
      body: note,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in retrieving your notes');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column