const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const should = require("should");

router.use(bodyParser.json());

//Middleware
const { getLocation } = require("../../utils/middlewares");
router.use(getLocation);

router.get("/", (req, res, next) => {
  const { location } = res.locals;
  try {
    should(location).be.a.Object();
  } catch (error) {
    return next(error);
  }
  return res.send(location);
});

module.exports = router;
