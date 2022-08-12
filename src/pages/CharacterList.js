import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
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
            <Link to={`/${char.id}`} key={char.id}>
              <h1>{char.name}</h1>
              <img src={char.image} alt={char.name} />
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default CharacterList;
