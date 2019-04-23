"use strict";
// Basic express setup:
const PORT = 8081;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['email', 'user'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/// ready for mongoDB
const Mongo = require("mongodb");
const { MongoClient } = Mongo;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';
///connect MongoDB
let db;
MongoClient.connect(MONGODB_URI, (err, dbInstance) => {
  if (err) {
    throw err;
  }
  console.log(`Successfully connected to DB: ${MONGODB_URI}`);
  db = dbInstance;
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  const regRoutes = require("./routes/register")(DataHelpers);
  app.use("/tweets", tweetsRoutes)
  app.use("/register", regRoutes)
});

/////
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
