import React from "react";

const BookCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>Authors: {data.authors}</p>
      <p>Publisher: {data.publisher}</p>
      <p>ISBN: {data.isbn}</p>
      <p>Released: {data.released}</p>
      <p>Media: {data.mediaType}</p>
    </div>
  );
};

export default BookCard;
