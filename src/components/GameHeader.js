import React from "react";

function GameHeader(props) {
  return (
    <div className="game__heading">
      {props.heroClicked && (
        <span
          className="game__lose_msg"
          data-content={`Oops! You clicked on ${props.heroClicked} twice.`}></span>
      )}

      <h1>Memory Card Game</h1>

      <span className="game__guide">
        Click on the same hero twice and you lose.
      </span>
    </div>
  );
}

export default GameHeader;
