import React from "react";

const Game = (props) => {
  return (
    <div className="col mb-4">
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
    </div>
  );
};

export default Game;
