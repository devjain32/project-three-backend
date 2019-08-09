const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/")
  .get(userController.findAll);

router.route("/register")
  .post(function(req, res, next){
    console.log(req),
    console.log(req.body),
    console.log(req.body.email),
    next();
  }, userController.create);

router.route("/login")
.post(function(req, res, next) {
  console.log("Signing in user");
  next();
}, passport.authenticate("local"), function(req, res){
  console.log("should show if logged");
  console.log(req.user);
  res.json(req.user);
});

router
  .route("/:id", isAuthenticated)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/logout")
  .get(function(req, res){
    console.log(req.user);
    req.logout();
    res.redirect("/");
  });

module.exports = router;
