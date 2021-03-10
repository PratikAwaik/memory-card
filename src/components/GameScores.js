import React from "react";

function Scores(props) {
  return (
    <div className="game__scores">
      <div className="game__scores__best">
        <h2>Best Score: {props.bestScore}</h2>
      </div>
      <div className="game__scores__current">
        <h2>Current Score: {props.currScore}</h2>
      </div>
    </div>
  );
}

export default Scores;
