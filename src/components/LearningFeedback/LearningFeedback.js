import React, { Component } from 'react';

class LearningFeedback extends Component {
  renderFeedbackMsg(isCorrect) {
    if (isCorrect) {
      return `You were correct! :D`;
    } else {
      return `Good try, but not quite right :(`;
    }
  }

  render() {
    const { response, guess } = this.props;
    const {
      nextWord,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
      answer,
      isCorrect,
    } = response;

    return (
      <section>
        <main>
          <div className="DisplayScore">
            <p>Your total score is: {totalScore}</p>
          </div>
          <h2>{this.renderFeedbackMsg(isCorrect)}</h2>
          <div className="DisplayFeedback">
            <p>
              The correct translation for {nextWord} was {answer} and you chose{' '}
              {guess}!
            </p>
          </div>

          <button>Try another word!</button>
        </main>
      </section>
    );
  }
}

export default LearningFeedback;
