const router = require("express").Router();
const plantsRoutes = require("./plants");
const plantController = require("../../controllers/plantsController");

router.route("/")
    .get(
        // res.send("byyyeeee")
        plantController.findAll
        // console.log("+++++++++++++++++++++++++++++");
   
    )


// Book routes
// router.use("/all", plantsRoutes);

module.exports = router;
