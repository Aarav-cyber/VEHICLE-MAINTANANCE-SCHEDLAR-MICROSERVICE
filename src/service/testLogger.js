const Log = require("../logger/logger");

async function test() {

  await Log(
    "backend",
    "info",
    "service",
    "Logger test successful"
  );
}

test();