const router = require("express").Router();
const plantsRoutes = require("./plants");



// plant routes
router.use("/", plantsRoutes);

module.exports = router;
