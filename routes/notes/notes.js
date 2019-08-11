const router = require("express").Router();
const notesController = require("../../controllers/notesController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

router.route("/findByPlant", isAuthenticated)
    .get(function (req, res, next) {
        console.log("findByPlants")
        next();
    }, notesController.findByPlant)

router.route("/create", isAuthenticated)
    .post(function (req, res, next) {
        console.log("create")
        next();
    }, notesController.create)

router.route("/findByUser", isAuthenticated)
    .get(function (req, res, next) {
        console.log("findByUser")
        next();
    }, notesController.findByUser)

module.exports = router;
