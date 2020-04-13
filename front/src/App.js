import React, { useState, useEffect } from "react";

import CitySelector from "./components/CitySelector";
import Home from "./components/Home";

function App() {
  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState({});

  const selectCity = (city = null) => {
    setCity({});
    fetch(`http://localhost:3000/v1/current/${city ? city : ""}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setCity(res);
      });
    fetch(`http://localhost:3000/v1/forecast/${city ? city : ""}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setForecast(res);
      });
  };

  useEffect(() => {
    selectCity();
  }, []);

  return (
    <React.Fragment>
      <CitySelector
        city={city}
        forecast={forecast}
        selectCity={selectCity}
      ></CitySelector>
      <Home city={city} forecast={forecast}></Home>
    </React.Fragment>
  );
}

export default App;
