import React from "react";

const CharCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>Gender: {data.gender}</p>
      <p>Aliases: {data.aliases}</p>
      <p>Culture: {data.culture}</p>
      <p>Born: {data.born}</p>
      <p>Died: {data.died}</p>
    </div>
  );
};

export default CharCard;
