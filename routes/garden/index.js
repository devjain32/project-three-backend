const router = require("express").Router();
const gardenRoutes = require("./garden");

router.use("/", gardenRoutes);

module.exports = router;
