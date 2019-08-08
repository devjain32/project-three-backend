const router = require("express").Router();
const plantsRoutes = require("./plants");
// const plantController = require("../../controllers/plantsController");

// router.route("/")
//     .get(plantController.findAll)


router.use("/", plantsRoutes);

module.exports = router;
