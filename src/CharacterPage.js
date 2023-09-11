import React from "react";
import axios from "axios";

const API_BASE_URL = "https://www.anapioficeandfire.com/api";

async function Characters() {
  const charList = await axios.get(`${API_BASE_URL}/characters`);
  console.log(charList["data"]["name"]);
}

function CharPage() {
  Characters();
  return (
    <div>
      <h1>Characters</h1>
      <h2>
        <a href="/">Home Page</a>
      </h2>
    </div>
  );
}

export default CharPage;
