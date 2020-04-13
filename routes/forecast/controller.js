const fetch = require("isomorphic-fetch");
const moment = require("moment");

const groupListByDay = (list) => {
  //Esta funcion agrupa los pronósticos por día, sacando los horarios.
  return list.filter((thing, index, self) => {
    list[index].date = moment(list[index].dt_txt).format("MMM Do YY"); //aprovecho para parsear la propiedad date.
    return (
      index ===
      self.findIndex(
        (t) =>
          moment(t.dt_txt).format("MMM Do YY") ===
            moment(thing.dt_txt).format("MMM Do YY") &&
          moment(t.dt_txt).format("MMM Do YY") !== moment().format("MMM Do YY") //tambien filtro el dia de hoy
      )
    );
  });
};

const getForecast = async (city = null) => {
  try {
    should(city).be.a.String();
  } catch (error) {
    return next(error);
  }

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac5c0556e66662da90951b744bb366d5&units=metric&lang=es`,
    {
      method: "GET",
    }
  );
  const forecast = await response.json();
  forecast.list = groupListByDay(forecast.list);
  return forecast;
};

module.exports = {
  getForecast,
};
