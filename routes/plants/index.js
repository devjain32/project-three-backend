const router = require("express").Router();
const plantsRoutes = require("./plants");

// Book routes
router.use("/all", plantsRoutes);

module.exports = router;
