"use strict";

// Basic express setup:
const PORT = 8081;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// const db = require("./lib/in-memory-db");

const Mongo = require("mongodb");
const { MongoClient } = Mongo;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';
///connect MongoDB
let dbInstance;
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    throw err;
  }
  console.log(`Successfully connected to DB: ${MONGODB_URI}`);
  dbInstance = db;
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);
});




app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// app.post('/tweets', function (req, res) {
//   const { text } = req.body;
//   console.log(text)

// });