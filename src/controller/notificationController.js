const x = require("../service/notificationService");

const y = require("../logger/logger");

async function z(req, res, next) {

  try {

    const a = await x.x();

    const b = {
      Placement: 3,
      Result: 2,
      Event: 1
    };

    const c = a.notifications.map((d) => {

      const e = b[d.Type] || 0;

    const f =
    e * 100000 +
    new Date(d.Timestamp).getTime();

      return {
        ...d,
        score: f
      };
    });

    c.sort((d, e) => e.score - d.score);

    const g = c.slice(0, 10);

    await y(
      "backend",
      "info",
      "controller",
      "priority notifications fetched"
    );

    res.status(200).json(g);

  } catch (e) {

    next(e);
  }
}

module.exports = {
  z
};