const router = require("express").Router();
const plantsRoutes = require("./plants");

// Book routes
router.use("/", plantsRoutes);

module.exports = router;
