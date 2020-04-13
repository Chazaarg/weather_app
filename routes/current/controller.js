const fetch = require("isomorphic-fetch");
const moment = require("moment");
const getWeather = async (city = null) => {
  try {
    should(city).be.a.String();
  } catch (error) {
    return next(error);
  }
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac5c0556e66662da90951b744bb366d5&units=metric&lang=es`,
    {
      method: "GET",
    }
  );
  const weather = await response.json();
  return {
    temp: weather.main.temp.toFixed(1) + " C°",
    name: weather.name,
    date: moment().format("MMM Do YY"),
  };
};

module.exports = {
  getWeather,
};
