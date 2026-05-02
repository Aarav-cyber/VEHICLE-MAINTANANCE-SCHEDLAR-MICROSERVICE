require("dotenv").config();

const axios = require("axios");

async function register() {
  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/register",
      {
        name: "Aarav Raj Shrestha",
        email: "aravraj331@gmail.com",
        mobileNo: "7416931836",
        githubUsername: "Aarav-cyber",
        rollNo: "AP23110011302",
        accessCode: "QkbpxH"
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log("Registration failed");

    console.log(
      error.response?.data || error.message
    );
  }
}

register();