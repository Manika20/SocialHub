const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comments"));
router.use("/api", require("./api"));
router.use("/auth", require("./auth"));
router.use("/likes", require("./likes"));
//console.log("Router Loaded");
module.exports = router;
