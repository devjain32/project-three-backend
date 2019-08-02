const path = require("path");
const router = require("express").Router();
const plantsRoutes = require("./plants");
const usersRoutes = require("./users");

router.use("/plants", plantsRoutes);
router.use("/users", usersRoutes)

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
