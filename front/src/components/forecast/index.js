import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="row">
      {forecast.list.map((item) => (
        <div className="col">
          <ul>
            <li> {item.date}</li>
            <li>{item.main.temp}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Forecast;
