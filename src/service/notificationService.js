require("dotenv").config();

const axios = require("axios");

async function x() {

  const y = await axios.get(
    "http://20.207.122.201/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    }
  );

  return y.data;
}

module.exports = {
  x
};