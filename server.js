const express = require('express');
const path = require('path');
const fs = require('fs');
// const Router = require('express').Router();
const PORT = process.env.port || 3001;
const app = express();
const db = require('./db/db.json');

const uuid = () => Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




// route to homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route to notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// GET request for notes
app.get('/api/notes', (req, res) => {
  console.info(`${req.method} request for note save`);
  readFromFile('./db/.json').then((data) => res.json(JSON.parse(data)));
});



// fs.readFile(db, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const parsedData = JSON.parse(data);
//     parsedData.push(data);
//         // noteListItems.push();

//     writeToFile(file, parsedData);
//   }
// });



//POST REQ>BODY
//todo post notes
app.post('/notes', (req, res) => {
  //
  console.info(`${req.method} request received your notes.`);
  
  // Destructuring assignment for the items in req.body
  const {title, text} = req.body

  if (text && title) {
    const newNote ={
      text,
      title,
      id: uuid(),
    };
  }

  fs.readFile(db, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {

      //convert string to JSON obj
      const parsedData = JSON.parse(data);

      //add new note to the saved notes
      parsedData.push(newNote);
          noteListItems.push();

      writeToFile(file, parsedData);

      fs.writeFile(db,        
        JSON.stringify(parsedData, null, 2),
        (writeErr) =>
          writeErr 
          ?console.error(writeErr)
          :console.info("Note saved sucessfully")
        ); 

    }
  });





    
      
});


    

  // *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */

// const writeToFile = (db, parsedNotes) =>
// fs.writeFile(db, JSON.stringify(note, null, 4), (err) =>
//   err ? console.error(err) : console.info(`\nData written to ${db}`)
// );

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
  // then 
// }

    //jsonNotes noteListItems
    // Obtain existing notes, parse to make objects
    
 
        // Write the note list out 
        
      
    

   
   

    // const response = {
    //   status: 'success',
    //   body: note,
    // };

   

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