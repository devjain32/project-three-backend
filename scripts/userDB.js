// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/plants"
// );

// const userSeed = [
//   {
//       username: "test@test.co",
//       password: "testing123",
//   }
// ];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
