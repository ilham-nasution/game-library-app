import React, { useState, useEffect, useContext } from "react";
import Game from "./Game";
import Pagination from "./Pagination";
import { GameContext } from "./GameContext";

const GameList = () => {
  const [
    games,
    setGames,
    handlePaginate,
    loading,
    setLoading,
    currentPage,
  ] = useContext(GameContext);

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
            id={game.id}
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
