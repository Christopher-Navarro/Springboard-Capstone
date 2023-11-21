import React from "react";

const HouseCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>Region: {data.region}</p>
      <p>Coat of Arms: {data.coatOfArms}</p>
    </div>
  );
};

export default HouseCard;
