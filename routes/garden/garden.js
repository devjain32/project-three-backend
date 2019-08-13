const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/api")
    .get(function(req, res, next){
        console.log("In the garden!")
        console.log(req.body)
        next();
    }, gardenController.find)
    .post(
        isAuthenticated,
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
        console.log(req.body.email);
        next();
    }, gardenController.create, function(req, res){
        console.log(req.user)
        res.json(req.user)
    });

router.route("/api/remove", isAuthenticated)
    .put(function(req, res, next){
        console.log(req.user)
        console.log(req.body._id)
        console.log("init pop")
        next();
    },gardenController.pop, function(req, res){
        console.log("pop pop");
    })
module.exports = router;