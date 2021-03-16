import React, { useState, useEffect } from "react";
import GameHeader from "./GameHeader";
import GameScores from "./GameScores";
import GameCards from "./GameCards";

function Game() {
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState(null);
  const [cards, setCards] = useState(null);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [heroClicked, setHeroClicked] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      let randomNum = Math.floor(Math.random() * (data.length - 20));
      const randomHeroes = data.slice(randomNum, randomNum + 40);

      setLoading(false);
      setHeroes(randomHeroes);
    })();
  }, []);

  useEffect(() => {
    if (heroes) setCards(heroes.slice(10, 20));
  }, [heroes]);

  async function fetchData() {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json",
    );
    const data = await response.json();
    return data;
  }

  function displayCards(randomHeroes, e) {
    if (randomHeroes) {
      let index;

      while (true) {
        const randomNum = Math.floor(Math.random() * randomHeroes.length);
        if (randomNum <= 30) {
          index = randomNum;
          break;
        }
      }

      if (e && !cardsClicked.includes(e.target.id)) {
        const clicked = [...cardsClicked];
        clicked.push(e.target.id);
        setCardsClicked(clicked);
        setCurrScore(currScore + 1);
      } else {
        if (currScore > bestScore) setBestScore(currScore);
        setCurrScore(0);
        setCardsClicked([]);

        if (e) {
          setHeroClicked(e.target.alt);
          setTimeout(() => {
            setHeroClicked(null);
          }, 5000);
        }
      }

      setCards(heroes.slice(index, index + 10));
    }
  }

  return (
    <div id="game">
      <GameHeader heroClicked={heroClicked} />
      <GameScores currScore={currScore} bestScore={bestScore} />
      {!loading ? (
        <GameCards heroes={heroes} cards={cards} displayCards={displayCards} />
      ) : (
        <div className="loading-msg">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Game;
