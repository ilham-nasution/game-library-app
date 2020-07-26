import React, { useState, useEffect } from "react";
import Game from "./Game";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const result = await fetch("https://api.rawg.io/api/games");
      const data = await result.json();
      setGames(data.results);
    };
    fetchGames();
  }, []);
  return (
    <div className="container mt-5">
      <div class="row row-cols-1 row-cols-md-3">
        {games.map((game) => (
          <Game
            key={game.id}
            imageURL={game.background_image}
            name={game.name}
            released={game.released}
            rating={game.metacritic}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;
