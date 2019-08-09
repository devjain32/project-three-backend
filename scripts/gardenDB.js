// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Garden collection and inserts the plants below

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/plants"
// );

// const gardenSeed = {
//     userID: 3,
//     plants: [
//         {
//             title: "Daylily",
//             description: "Plant breeders continue to expand the color palette available in daylilies, which now includes yellow, orange, red, white, and purple flowers. Varieties with muliticolored blooms, often with a contrasting 'eye,' or center, are increasingly popular. Most daylilies have a distinct, three- to four-week bloom period in early to late summer, although some varieties continue to bloom sporadically all season long. Most daylilies bloom during the day (diurnal), but some open in the evening (nocturnal). Individual flowers last just one day but new ones open daily for the duration of the bloom time. Foliage height ranges from 1 to 4 feet, depending on variety. Flower stalks, or scapes, on the tallest varieties can reach 6 feet. Flowers are edible.",
//             image: "https://garden.org/pics/2018-09-29/Betja/60bcb6.jpg",
//             isSaved: true
//         },
//         {
//             title: "Apple",
//             description: "Apples require a fair amount of patience and planning. If you want a choice crop, you'll have to control insects, diseases, and other pests, keep an eye on the weather, and prune annually. And your first harvest will only come 3 years or more after planting. But the reward picking apples from your own garden is worth the effort.",
//             image: "https://garden.org/pics/2018-10-13/cliftoncat/51940e.jpg",
//             isSaved: true
//         },
//         {
//             title: "Basil",
//             description: "There are several types of basil to choose from. The most common is bush or sweet basil, a compact plant growing to 18 inches or so during the season. Purple basil adds a splendid burgundy color to the garden. It can be used like common basil, though it's a little less sweet. The purple leaves create a beautiful color when steeped in white vinegar. Recently rediscovered by many cooks, lemon basil adds a lemony basil fragrance to both the garden and the kitchen. Thai basil adds a licorice flavor and tastes great in Asian cooking. Basil is a heat-loving annual herb.",
//             image: "https://garden.org/pics/2014-05-08/wildflowers/9e62c5.jpg",
//             isSaved: true
//         }
//     ]

// };

// db.Garden
//     .remove({})
//     .then(() => db.Garden.collection.insertOne(gardenSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
