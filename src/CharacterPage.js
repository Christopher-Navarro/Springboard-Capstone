import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard";

function CharPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=15`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <h1>Characters</h1>
      <h2 class="alignRight">
        <button>
          <a href="/">Home Page</a>
        </button>
        <button onClick={goBack} disabled={loading}>
          Back
        </button>
        <button onClick={loadMore} disabled={loading}>
          Next
        </button>
      </h2>
      <div className="app">
        {data.map((item, index) => (
          <CharCard key={index} data={item} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default CharPage;
