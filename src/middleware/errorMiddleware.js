const x = require("../logger/logger");

async function y(err, req, res, next) {

  await x(
    "backend",
    "error",
    "middleware",
    err.message
  );

  res.status(500).json({
    success: false,
    message: "internal server error"
  });
}

module.exports = y;