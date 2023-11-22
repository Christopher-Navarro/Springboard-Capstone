import React from "react";

const HouseCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>Region: {data.region}</p>
      <p>Coat of Arms: {data.coatOfArms}</p>
      <p>Titles: {data.titles}</p>
      <p>Seats: {data.seats}</p>
    </div>
  );
};

export default HouseCard;
