const router = require("express").Router();
const plantsRoutes = require("./plants");
// const plantController = require("../../controllers/plantsController");


router.route("/:query")
    .get(
        // console.log("query:", req.params.query)
        plantController.findOne
    )




// Book routes
// router.use("/all", plantsRoutes);
// router.route("/")
//     .get(plantController.findAll)


router.use("/", plantsRoutes);

module.exports = router;
