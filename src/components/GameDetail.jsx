import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const GameDetail = () => {
  let { id } = useParams();
  const [game, setGame] = useState({ parent_platforms: [] });

  useEffect(() => {
    const fetchGame = async () => {
      const result = await fetch(`https://api.rawg.io/api/games/${id}`);
      const data = await result.json();
      setGame(data);
    };
    fetchGame();
  }, [id]);

  return (
    <>
      <div className="text-center">
        <img
          src={game.background_image}
          className="rounded mt-3 shadow-sm"
          alt="game"
          width="500px"
        ></img>
        <h3>{game.name}</h3>
        {ReactHtmlParser(game.description)}
        <h5>Available on:</h5>
        {game.parent_platforms.map((platform) => (
          <span className="mr-2">{platform.platform.name}</span>
        ))}
        <h5 className="mt-2">Rating on metacritic:</h5>
        <span className="badge badge-pill badge-danger p-3">
          {game.metacritic}
        </span>
      </div>
    </>
  );
};

export default GameDetail;
