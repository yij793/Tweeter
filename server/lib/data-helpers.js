"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    //check user email

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, (err, res) => {
        if (err) {
          throw err
        }
        callback(null, res)

      })
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
      db.collection('tweets').find({}).toArray((err, res) => {
        if (err) {
          throw err
        }
        callback(null, res)
      })
    },
    getUser: function (callback) {
      db.collection('user').find({}).toArray((err, res) => {
        if (err) {
          throw err
        }
        callback(null, res)
      })
    },
    saveUser: function (newUser, callback) {
      db.collection('user').insertOne(newUser, (err, res) => {
        if (err) {
          throw err
        }
        callback(null, res)

      })
    }
  }
}
