import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from './utils'

function CharPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/characters')
      .then(response => {
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <h2 class="alignRight">
        <a href="/">Home Page</a>
      </h2>
      {characters.map((character) => <Character name={character.name} gender={character.gender}/>)}
    </div>
  );
}

function Character({name, gender}) {
  return(
    <div key={name}>
      <h2> Name : {name} </h2>
      <h2> Gender: {gender} </h2>
    </div>
  )
}

export default CharPage;
