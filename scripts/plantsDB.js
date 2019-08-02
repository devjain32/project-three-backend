const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/plants"
);

const plantsSeed = [
    {
        type: "Rose" 
    }
];

db.Plants
    .remove({})
    .then(() => db.Plants.collection.insertMany(plantsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
