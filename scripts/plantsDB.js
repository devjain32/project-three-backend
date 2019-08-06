const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/plants"
);

const plantsSeed = [
    {
        title: "Daylilies",
        description: "Plant breeders continue to expand the color palette available in daylilies, which now includes yellow, orange, red, white, and purple flowers. Varieties with muliticolored blooms, often with a contrasting "eye," or center, are increasingly popular. Most daylilies have a distinct, three- to four-week bloom period in early to late summer, although some varieties continue to bloom sporadically all season long. Most daylilies bloom during the day (diurnal), but some open in the evening (nocturnal). Individual flowers last just one day but new ones open daily for the duration of the bloom time. Foliage height ranges from 1 to 4 feet, depending on variety. Flower stalks, or scapes, on the tallest varieties can reach 6 feet. Flowers are edible.",
        image: "https://garden.org/pics/2018-09-29/Betja/60bcb6.jpg"
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
