const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/")
    .post(
        gardenController.findAndUpdate
        // res.send("alsjfdlaskdjf;aslkfj")
    )
    .get(gardenController.find)




// router.route("/:email", isAuthenticated)
//     .get(function(req, res, next){
//         console.log("In the garden!");
//         console.log(req.user)
//         next();
//     }, gardenController.find);

router.route("/create", isAuthenticated)
    .post(function(req, res, next){
        console.log(req.user);
        next();
    }, gardenController.create, function(req, res){
        console.log(req.user)
        res.json(req.user)
    });

module.exports = router;