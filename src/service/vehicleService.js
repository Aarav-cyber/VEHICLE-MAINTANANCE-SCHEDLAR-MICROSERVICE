require("dotenv").config();

const axios = require("axios");

async function x() {

  const y = await axios.get(
    "http://20.207.122.201/evaluation-service/depots",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    }
  );

  return y.data;
}

async function y() {

  const z = await axios.get(
    "http://20.207.122.201/evaluation-service/vehicles",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    }
  );

  return z.data;
}

function z(a, b) {

  const c = b.length;

  const d = Array(c + 1)
    .fill(0)
    .map(() => Array(a + 1).fill(0));

  for (let i = 1; i <= c; i++) {

    const j = b[i - 1].Duration;

    const k = b[i - 1].Impact;

    for (let l = 0; l <= a; l++) {

      if (j <= l) {

        d[i][l] = Math.max(
          k + d[i - 1][l - j],
          d[i - 1][l]
        );

      } else {

        d[i][l] = d[i - 1][l];
      }
    }
  }

  let e = a;

  const f = [];

  for (let i = c; i > 0; i--) {

    if (d[i][e] !== d[i - 1][e]) {

      f.push(b[i - 1]);

      e -= b[i - 1].Duration;
    }
  }

  return {
    maxImpact: d[c][a],
    selected: f,
    usedHours: a - e
  };
}

module.exports = {
  x,
  y,
  z
};