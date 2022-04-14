const express = require('express');
const path = require('path');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);
const Router = require('express').Router();
const { title, text } = note;

const PORT = 3001;
const app = express();
const db = require('./db/db.json');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




// route to homepage
Router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route to notes
Router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// GET request for notes
app.get('/api/notes', (req, res) => {
  console.info(`${req.method} request for note save`);
  readFromFile('./db/.json').then((data) => res.json(JSON.parse(data)));
});

// POST request to add a review
// app.post('/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
      // Convert string into JSON object
      // Add a new review
    
  // *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */

  const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 * 
//  *  Function to read data from a given a file and append some content
//  *  @param {object} content The content you want to append to the file.
//  *  @param {string} file The path to the file you want to save to.
//  *  @returns {void} Nothing
//  */



  // If all the required properties are present
  // if (title && text) {
    // readFromFile()
  //   noteListItems.push(note);
  // then 
// }

    //jsonNotes noteListItems
    // Obtain existing notes, parse to make objects
    
 
        // Write the note list out 
        
      };
    

   
  //   const writeToFile = (db, note) =>
  // fs.writeFile(db, JSON.stringify(note, null, 4), (err) =>
  //   err ? console.error(err) : console.info(`\nData written to ${db}`)
  // );


    const response = {
      status: 'success',
      body: note,
    };

   

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