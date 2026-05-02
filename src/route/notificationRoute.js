const express = require("express");

const x = express.Router();

const y = require("../controller/notificationController");

x.get("/notifications/top", y.z);

module.exports = x;