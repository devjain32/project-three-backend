var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/user");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(User.authenticate()));
  // function (username, password, done) {
  //   User.findOne({ username: username }, function (err, user) {
  //     if (err) { return done(err); }
  //     if (!user) {
  //       return done(null, false, { message: 'Incorrect username.' });
  //     }

  //     if (!user.validPassword(password)) {

  //       return done(null, false, { message: 'Incorrect password.' });
  //     }
  //     return done(null, false, { message: 'Incorrect password.' });
  //   });
  // }
// ));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// Exporting our configured passport
module.exports = passport;
