import React, { Component } from 'react';

class LearningWordPrompt extends Component {
  render() {
    const {
      word,
      correctCount,
      incorrectCount,
      totalScore,
      handleSubmit,
    } = this.props;

    return (
      <section>
        <main>
          <h2>Translate the word:</h2>
          <span>{word}</span>
          <form onSubmit={(ev) => handleSubmit(ev)}>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>
            <input id="learn-guess-input" type="text" required />
            <button type="submit">Submit your answer</button>
          </form>
          You have answered this word correctly {correctCount} times.
          <br />
          You have answered this word incorrectly {incorrectCount} times.
        </main>
        <p>Your total score is: {totalScore}</p>
      </section>
    );
  }
}

export default LearningWordPrompt;
