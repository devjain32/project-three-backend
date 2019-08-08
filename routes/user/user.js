const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/")
  .get(userController.findAll);

router.route("/register")
  .post(userController.create);

  router.route("/login")
  .post(function(req, res, next) {
    console.log("Signing in user");
    next();
  }, passport.authenticate("local", {
    successRedirect: "/garden/",
    failureRedirect: "/user/accounts/login"
  }), function(req, res){
    console.log("should show if logged");
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
    req.logout();
    res.redirect("/home");
  });

module.exports = router;
