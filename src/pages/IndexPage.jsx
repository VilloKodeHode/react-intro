import { useState } from "react";
import { StdButton } from "../components/buttons/Buttons";

import "./indexPage.css";
import { CARDS } from "../data/cards";
import { TeachingCard } from "../components/cards/Card";

export const IndexPage = ({ count, decrease, increase }) => {
  console.log(CARDS);

  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(null);


  
  const findScores = () =>
    CARDS.map((card) => {
      setScore({id: card.id ,score: card.score});
    }, console.log("scores:", score));



  const showRandomCard = () => {
    setShowAnswer(false);
    const randomCard = Math.round(Math.random(CARDS.length));
    setCurrentCard(CARDS[randomCard]);
  };

  const showingAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <main>
      <section className="hero">
        <h1>Hello world</h1>
        <p>this is a intro to react</p>
        <p>started with typing: npm create vite@latest ./</p>

        <div className="std_btn">
          <button onClick={increase}>Increase</button>
        </div>

        <div className="std_btn">
          <button className={count < 10 ? "" : "orange_btn"} onClick={decrease}>
            Decrease
          </button>
        </div>

        <p>{count}</p>
        <p>{count < 10 ? "count is less then 10" : "count is 10 or more"}</p>
        {/* <StdButton>Click me!</StdButton> */}
      </section>
      <TeachingCard currentCard={currentCard} showAnswer={showAnswer} showRandomCard={showRandomCard} showingAnswer={showingAnswer}/>
      {/* <section className="intro">
        <button onClick={showRandomCard}>click to show a card</button>
        <p>{currentCard?.description}</p>
        <button onClick={showingAnswer}>Answer</button>
        <p>{showAnswer && currentCard?.answer}</p>
      </section> */}
      <button onClick={findScores}>click</button>
    </main>
  );
};
