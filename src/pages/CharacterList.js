import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./character.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

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
