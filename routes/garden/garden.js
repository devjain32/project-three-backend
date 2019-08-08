const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated")



router.route("/", isAuthenticated)
    .get(function(req, res){
        console.log("in the garden page")
        console.log(req.user)
        res.status(200).send
    })
    .post(function(req, res){

        console.log("In the garden!");
        console.log(req.user);
        res.status(200).send();
    });

module.exports = router;