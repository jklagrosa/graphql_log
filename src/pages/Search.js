import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_DATA = gql`
  query GetName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getCharacterLocations, { loading, error, data, called }] =
    useLazyQuery(SEARCH_DATA, {
      variables: {
        name,
      },
    });

  if (error) return <h1>SOMETHING WENT WRONG.</h1>;

  if (loading) return <h1>PLEASE WAIT...</h1>;

  console.log({ called, loading, error, data });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getCharacterLocations()}>Search</button>

      {data && (
        <>
          <ul>
            {data.characters.results.map((char) => (
              <>
                {char.location.name}
                <br />
              </>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Search;
