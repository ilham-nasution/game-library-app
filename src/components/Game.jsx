import React from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  return (
    <Link to={`games/${props.id}`} className="col mb-4 text-decoration-none">
      <div className="card h-100 shadow-sm">
        <img
          src={props.imageURL}
          className="card-img-top h-50 position-relative"
          alt="game"
        />
        <span className="badge badge-primary position-absolute p-2 mt-1 ml-1">
          {props.rating}
        </span>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Release date: {props.released}</p>
        </div>
      </div>
    </Link>
  );
};

export default Game;
