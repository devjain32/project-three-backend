const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// router.route("/")
//   .get(plantsController.findAll)
  // .post(plantsController.create);
  
  router.route("/:query")
  .get(
      // console.log("query:", req.params.query)
      plantsController.findOne
  )

router.route("/")
  .get(
      // res.send("byyyeeee")
      plantsController.findAll
      // console.log("+++++++++++++++++++++++++++++");

  )





router
  .route("/save/:query")
  // .get(plantsController.findById)
  .put(plantsController.update)
  // .delete(plantsController.remove);

module.exports = router;
