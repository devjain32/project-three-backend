const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// router.route("/")
//   .get(plantsController.findAll)
  // .post(plantsController.create);
  
  router.route("/:query", isAuthenticated)
  .get(
      // console.log("query:", req.params.query)
      plantsController.findOne
  )

router.route("/", isAuthenticated)
  .get(function(req, res, next){
    console.log(req.user),
    next();
  }, plantsController.findAll
      // res.send("byyyeeee")

      // console.log("+++++++++++++++++++++++++++++");

  )

router.route("/notes", isAuthenticated)
  .post(function(req, res, next) {
    console.log("plants notes", req.body._id);
    next();
  }, plantsController.findOneAndUpdate)





router
  .route("/save/:query")
  // .get(plantsController.findById)
  .put(plantsController.update)
  // .delete(plantsController.remove);

module.exports = router;
