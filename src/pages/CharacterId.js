import React from "react";
import { useGetCharacter } from "../hooks/useGetCharacter";
import { useParams } from "react-router-dom";
import "./characterSingle.css";

const CharacterId = () => {
  const params = useParams();

  const { error, loading, data } = useGetCharacter(params.id);

  console.log({ error, loading, data });

  if (error) return <h1>SOMETHING WENT WRONG.</h1>;

  if (loading) return <h1>PLEASE WAIT...</h1>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width={750}
        height={750}
      />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((ep) => (
            <>
              <div>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterId;
