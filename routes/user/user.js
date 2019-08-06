const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/")
  .get(userController.findAll);

router.route("/register")
  .post(userController.create);

router.route("/login")
  .get(function(req, res){
    res.render("/login");
  })
  .post(function(req, res, next) {
    console.log("Signing in user");
    console.log(req.body);
    next();
  }, passport.authenticate("local", {
    successRedirect: "/garden/",
    failureRedirect: "/user/accounts/login"
  }), function(req, res){
    console.log("should show if logged");
    res.status(200).json(req.body);
  });

router
  .route("/:id", isAuthenticated)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
