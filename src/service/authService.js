require("dotenv").config();

const axios = require("axios");

async function authenticate() {

  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/register",
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log("Authentication failed");

    console.log(
      error.response?.data || error.message
    );
  }
}

authenticate();