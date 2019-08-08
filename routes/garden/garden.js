const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/:email", isAuthenticated)
    .get(function(req, res, next){
        console.log("In the garden!");
        console.log(req.user);
        console.log(req.params);
        next();
    }, gardenController.find);

router.route("/create", isAuthenticated)
    .post(function(req, res, next){
        console.log(req.body);
        next();
    }, gardenController.create);

module.exports = router;