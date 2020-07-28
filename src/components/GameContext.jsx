import React, { useState, createContext, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const result = await fetch(
        `https://api.rawg.io/api/games?page=${currentPage}&page_size=9`
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
    <GameContext.Provider
      value={[
        games,
        setGames,
        handlePaginate,
        loading,
        setLoading,
        currentPage,
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
