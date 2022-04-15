const express = require("express");
const path = require("path");
const fs = require("fs");
// const Router = require('express').Router();
const PORT = process.env.port || 3001;
const app = express();
// const db = require("./db/db.json");

const uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// route to homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//route to notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// GET request for notes
app.get("/notes", (req, res) => {
  res.status(200).json("${req.method request received");
  console.info(`${req.method} request for note save`);
});
// fs.readFile('./db/db.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   }     //convert string to JSON obj
//     const parsedData = JSON.parse(data);
//     res.json(parsedData);
//   });

//POST REQ>BODY
//todo post notes
app.post("/notes", (req, res) => {
  //
  console.info(`${req.method} request received your notes.`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      text,
      title,
      id: uuid(),
    };
    console.log(newNote);

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        //convert string to JSON obj
        const parsedData = JSON.parse(data);

        //add new note to the saved notes
        parsedData.push(newNote);
        // res.json(parsedData)
        parsedData.push();

        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedData, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Note saved sucessfully")
        );
      }
    });

    const response = {
      status: "success",
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting your note");
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
