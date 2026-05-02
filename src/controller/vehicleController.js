const x = require("../service/vehicleService");

const y = require("../logger/logger");

async function z(req, res, next) {

  try {

    const a = await x.x();

    await y(
      "backend",
      "info",
      "controller",
      "depot data fetched"
    );

    res.status(200).json(a);

  } catch (e) {

    next(e);
  }
}

async function a(req, res, next) {

  try {

    const b = await x.y();

    await y(
      "backend",
      "info",
      "controller",
      "vehicle data fetched"
    );

    res.status(200).json(b);

  } catch (e) {

    next(e);
  }
}

async function b(req, res, next) {

  try {

    const c = Number(req.params.id);

    const d = await x.x();

    const e = await x.y();

    const f = d.depots.find(
      (g) => g.ID === c
    );

    if (!f) {

      return res.status(404).json({
        success: false,
        message: "depot not found"
      });
    }

    const h = x.z(
      f.MechanicHours,
      e.vehicles
    );

    await y(
      "backend",
      "info",
      "controller",
      "schedule generated"
    );

    res.status(200).json({
      depotId: f.ID,
      mechanicHours: f.MechanicHours,
      maxImpact: h.maxImpact,
      usedHours: h.usedHours,
      selectedTasks: h.selected
    });

  } catch (e) {

    next(e);
  }
}

module.exports = {
  z,
  a,
  b
};