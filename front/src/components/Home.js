import Wrapper from "./layout/Wrapper";
import React from "react";
import Forecast from "./forecast";
import Current from "./current";

const Home = ({ city, forecast }) => {
  return (
    <Wrapper loading={!city.name || !forecast.list}>
      <Current city={city} />
      <hr />
      <Forecast forecast={forecast} />
    </Wrapper>
  );
};

export default Home;
