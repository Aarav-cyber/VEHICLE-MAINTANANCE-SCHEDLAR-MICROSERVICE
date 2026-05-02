const x = require("../logger/logger");

async function y(req, res, next) {

  await x(
    "backend",
    "info",
    "middleware",
    `${req.method} ${req.url}`
  );

  next();
}

module.exports = y;