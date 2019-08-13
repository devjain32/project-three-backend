require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const AWS = require("aws-sdk");
const db = require("./models");

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3Config = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  Bucket: BUCKET_NAME
}
console.log("hello");
const S3 = new AWS.S3(s3Config);

app.use(fileupload());
app.use(express.static("public"));

app.post("/upload", function(req, res) {
  // console.log(accessKeyId);
  // console.log(secretAccessKey)
  // console.log(BUCKET_NAME)
  //res.json(req.ffilesfile);
  
  // console.log(req.body.pname)
  // console.log(req.body.desc)
  S3.upload({
    
      Bucket: BUCKET_NAME,
      Key: req.files.file.name,
      Body: req.files.file.data,
      ContentType: req.files.file.mimetype
  }, function(err, data) {
      console.log("err line 42",err);
      console.log("line 43 location",data.Location)
      console.log(data)
      if(!err) {
        console.log("helllooooo")
        var plantObj = {
          title: req.body.pname,
          description: req.body.desc,
          image: data.Location
        }
        console.log("line 52",plantObj)
        db.Plants
        .create(plantObj)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.error(err)
          res.status(422).json(err)
        });
      }
      // res.json(data);
  })
})

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
