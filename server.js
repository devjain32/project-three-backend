const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

// Define middleware here
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard kat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plants");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
