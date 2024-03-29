const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// router.route("/")
//   .get(plantsController.findAll)
  // .post(plantsController.create);
  
  router.route("/api/:query", isAuthenticated)
  .get(
      // console.log("query:", req.params.query)
      plantsController.findOne
  )

router.route("/api", isAuthenticated)
  .get(function(req, res, next){
    console.log(req.user),
    next();
  }, plantsController.findAll)
  .post(plantsController.create)

router.route("/api/notes", isAuthenticated)
  .post(function(req, res, next) {
    console.log("plants notes", req.body._id);
    next();
  }, plantsController.findOneAndUpdate)


router
  .route("/api/save/:query")
  // .get(plantsController.findById)
  .put(plantsController.update);

module.exports = router;
