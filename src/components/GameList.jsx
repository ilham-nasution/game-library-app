import React, { useState, useEffect } from "react";
import Game from "./Game";
import Pagination from "./Pagination";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const result = await fetch(
        `https://api.rawg.io/api/games?page=${currentPage}`
      );
      const data = await result.json();
      setGames(data.results);
      setLoading(false);
    };
    fetchGames();
    return () => {
      setGames([]);
    };
  }, [currentPage]);

  const handlePaginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container mt-5">
      {loading && (
        <div className="d-flex justify-content-center m-5">
          <div
            className="spinner-border text-success"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3">
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
      <Pagination paginate={handlePaginate} />
    </div>
  );
};

export default GameList;
