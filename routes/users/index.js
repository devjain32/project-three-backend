const router = require("express").Router();
const usersRoutes = require("./users");

router.use("/login", usersRoutes);

module.exports = router;
