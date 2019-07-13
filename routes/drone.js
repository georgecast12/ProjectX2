var express = require("express");
var router = express.Router();

var dronemission = require("../controllers/dronemission");

router.get("/runMission", dronemission.runMission);

module.exports = router;
