const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/", isAuthenticated)
    .get(function(req, res){
        console.log("In the garden!");
        res.status(200).send();
    });

module.exports = router;