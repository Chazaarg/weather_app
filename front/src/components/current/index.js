import React from "react";

const Current = ({ city }) => {
  const { name, temp, date } = city;
  return (
    <div className="p-3">
      <h1>{name}</h1>
      <h2>{temp}</h2>
      <small>{date}</small>
    </div>
  );
};
export default Current;
