const express = require("express");

const x = express.Router();

x.get("/users", async (req, res) => {

  res.status(200).json({
    success: true,
    data: []
  });
});

module.exports = x;