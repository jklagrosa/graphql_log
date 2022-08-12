import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_LISTS = gql`
  query {
    countries {
      name
      capital
      emoji
      code
    }
  }
`;

function Home() {
  const { error, loading, data } = useQuery(GET_LISTS);

  if (error) {
    return <h1>SOMETHING WENT WRONG.</h1>;
  }

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  console.log(data);
  return (
    <div className="home">
      <h1>LIST OF COUNTRIES</h1>
      <Link to="/search">Search For Country</Link>
      <br />
      <br />
      <div className="list-countries">
        {data &&
          data.countries.map((country, index) => (
            <>
              <div key={index} className="countries-box">
                <h3>
                  {country.name}, {country.emoji}
                </h3>
                <h4>
                  {country.capital} | {country.code}
                </h4>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Home;
