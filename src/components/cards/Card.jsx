export const TeachingCard = ({showRandomCard, showAnswer, showingAnswer, currentCard})=> {
    return (
        <section className="intro">
        <button onClick={showRandomCard}>click to show a card</button>
        <p>{currentCard?.description}</p>
        <button onClick={showingAnswer}>Answer</button>
        <p>{showAnswer && currentCard?.answer}</p>
      </section>
    )
}