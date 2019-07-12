var express = require("express");
var router = express.Router();

var apps_controller = require("../controllers/apps_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", isAuthenticated, apps_controller.index);

router.post("/new", isAuthenticated, apps_controller.createTrip);

module.exports = router;
