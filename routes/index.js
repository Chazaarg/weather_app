const express = require("express");
const location = require("./location");
const forecast = require("./forecast");
const current = require("./current");

const app = express();

app.use("/location", location);

app.use("/current", current);

app.use("/forecast", forecast);

module.exports = app;
