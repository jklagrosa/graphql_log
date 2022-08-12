import { useLazyQuery, gql } from "@apollo/client";
import React, { useState } from "react";

const SEARCH_COUNTRY = gql`
  query Mais($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`;

function Search() {
  const [name, setName] = useState("");
  const [searchCountry, { error, data, loading }] =
    useLazyQuery(SEARCH_COUNTRY);

  if (error) {
    return <h1>SOMETHING WENT WRONG.</h1>;
  }

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  console.log(data);

  return (
    <div className="search">
      <br />
      <br />
      <div className="inputs">
        <input
          type="text"
          placeholder="Entry Country Code (e.g. KR for Korea)..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            searchCountry({
              variables: {
                code: name.toUpperCase(),
              },
            });
          }}
        >
          Search Country
        </button>

        <hr />

        <div>
          {data && (
            <div>
              <h1>{data.country.name}</h1>
              <h1>{data.country.capital}</h1>
              <h1>{data.country.emoji}</h1>
              <h1>{data.country.code}</h1>
              <h1>{data.country.currency}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
