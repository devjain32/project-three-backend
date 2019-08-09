const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/")
    .get(function(req, res, next){
        console.log("In the garden!")
        console.log(req.body)
        next();
    }, gardenController.find)
    .post(
        isAuthenticated,
        gardenController.findAndUpdate
        // res.send("alsjfdlaskdjf;aslkfj")
    );
    
router.route("/create", isAuthenticated)
    .post(function(req, res, next){
        console.log(req.body.email);
        next();
    }, gardenController.create, function(req, res){
        console.log(req.user)
        res.json(req.user)
    });

module.exports = router;