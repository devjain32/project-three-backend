const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

router.route("/")
  .get(plantsController.findAll)
  // .post(plantsController.create);

router
  .route("/save/:query")
  // .get(plantsController.findById)
  .put(plantsController.update)
  // .delete(plantsController.remove);

module.exports = router;
