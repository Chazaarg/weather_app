const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const controller = require("./controller");
var should = require("should");

const handleCurrent = async (req, res, next) => {
  const weather = await controller.getWeather(res.locals.location.city);
  try {
    should(weather).be.a.Object();
  } catch (error) {
    return next(error);
  }
  return res.send(weather);
};

const { getLocation } = require("../../utils/middlewares"); //middleware getLocation
router.get("/:city?", getLocation, handleCurrent); //

module.exports = router;
