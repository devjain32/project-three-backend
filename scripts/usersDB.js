const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Clothes collection and inserts the clothing below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plants"
);

const usersSeed = [
  {
      username: "dev",
      password: "",
      plantsPosted: [
        "Hello", "Goodbye"
      ]
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
