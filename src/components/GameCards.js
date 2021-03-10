import React from "react";

function GameCards(props) {
  return (
    <div className="game__cards">
      {props.cards
        ? props.cards.map((hero, index) => {
            return (
              <div key={index} className="game__cards__card">
                <img
                  id={hero.id}
                  src={hero.images.sm}
                  alt={hero.name}
                  onClick={(e) => props.displayCards(props.heroes, e)}
                />
                <span>{hero.name}</span>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default GameCards;
