const path = require("path");
const router = require("express").Router();
const plantsRoutes = require("./plants");
const userRoutes = require("./user");
const gardenRoute = require("./garden");
const notesRoute = require("./notes");

router.use("/plants", plantsRoutes);
router.use("/user", userRoutes);
router.use("/garden", gardenRoute);
router.use("/notes", notesRoute)

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
