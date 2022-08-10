import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./character.css";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <h1>PLEASE WAIT...</h1>;
  }

  if (error) {
    return <h1>SOMETHING WENT WRONG.</h1>;
  }

  return (
    <>
      <div className="character-list">
        {data.characters.results.map((char) => (
          <>
            <div key={char.id}>
              <h1>{char.name}</h1>
              <img src={char.image} alt={char.name} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CharacterList;
