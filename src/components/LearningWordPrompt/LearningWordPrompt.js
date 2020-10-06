import React, { Component } from 'react';
import SpacedRepetitionService from '../../services/spaced-repetition-api-service';

class LearningWordPrompt extends Component {
  render() {
    const { word, correctCount, incorrectCount, totalScore } = this.props;

    return (
      <section>
        <main>
          <h2>Translate the word:</h2>
          <span>{word}</span>
        </main>
        <p>Your total score is: {totalScore}</p>
      </section>
    );
  }
}

export default LearningWordPrompt;
