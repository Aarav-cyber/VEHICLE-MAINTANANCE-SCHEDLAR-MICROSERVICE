const express = require("express");

const x = express.Router();

const y = require("../controller/vehicleController");

x.get("/depot", y.z);

x.get("/vehicles", y.a);

x.get("/schedule/:id", y.b);

module.exports = x;