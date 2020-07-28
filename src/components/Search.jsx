import React, { useState, useContext } from "react";
import { GameContext } from "./GameContext";

const Search = () => {
  const [value, setValue] = useState("");
  const [
    games,
    setGames,
    handlePaginate,
    loading,
    setLoading,
    currentPage,
  ] = useContext(GameContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const fetchGames = async () => {
      setLoading(true);
      const result = await fetch(
        `https://api.rawg.io/api/games?page=${currentPage}&search=${value}&page_size=9`
      );
      const data = await result.json();
      setGames(data.results);
      setLoading(false);
    };
    fetchGames();
  };

  return (
    <form onSubmit={handleSearch} className="form-inline">
      <input
        className="form-control mr-sm-2"
        name="search"
        type="search"
        value={value}
        placeholder="Search"
        onChange={handleChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
