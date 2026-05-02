require("dotenv").config();

const axios = require("axios");

async function Log(stack, level, pkg, message) {

  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log created successfully");

  } catch (error) {

    console.log("Logging failed");

    console.log(
      error.response?.data || error.message
    );
  }
}

module.exports = Log;