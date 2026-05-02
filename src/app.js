const express = require("express");

const x = require("./route/userRoute");

const y = require("./middleware/loggerMiddleware");

const z = require("./middleware/errorMiddleware");

const a = require("./route/vehicleRoute");

const b = express();

b.use(express.json());

b.use(y);

b.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "server running"
  });
});

b.use("/api", x);

b.use("/api", a);

b.use(z);

module.exports = b;