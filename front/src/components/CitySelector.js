import React from "react";
import cities from "../utils/cities.json";
import { FormGroup, Input } from "reactstrap";
const CitySelector = ({ city, selectCity, forecast }) => {
  return (
    <FormGroup className="col-6 m-auto pt-5">
      <Input
        type="select"
        value={city.name}
        onChange={({ target }) => selectCity(target.value)}
        name="select"
      >
        {!forecast.list ? (
          //Si todavía no se cargó forecast, significa que carga la ubicación actual
          <option>Loading current location...</option>
        ) : (
          //Si no muestro el resto de ciudades
          cities.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))
        )}
      </Input>
    </FormGroup>
  );
};

export default CitySelector;
