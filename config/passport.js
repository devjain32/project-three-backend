var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username);
    console.log(password);
    User.findOne(
      { username: username },
      function(err, user){
        if(err) {
          return done(err);
        }
        if(!user){
          return done(null, false, "Incorrect username");
        }
        if(user.password != password){
          return done(null, false, "Incorrect password");
        }
        return done(null, user);
      })
  })
);

passport.serializeUser(function(user, cb){
  cb(null, user);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
// Exporting our configured passport
module.exports = passport;
