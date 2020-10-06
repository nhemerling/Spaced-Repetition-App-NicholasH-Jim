import React, { Component } from 'react';
import SpacedRepetitionService from '../../services/spaced-repetition-api-service';
import LearningFeedback from '../../components/LearningFeedback/LearningFeedback';
import LearningWordPrompt from '../../components/LearningWordPrompt/LearningWordPrompt';

class LearningRoute extends Component {
  componentDidMount() {
    SpacedRepetitionService.getHeadWord().then((res) => {
      this.setState({
        word: res.nextWord,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
        totalScore: res.totalScore,
      });
    });
  }

  state = {
    showFeedback: false,
  };
  render() {
    const {
      word,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
    } = this.state;
    return this.state.showFeedback ? (
      <LearningFeedback />
    ) : (
      <LearningWordPrompt
        word={word}
        correctCount={wordCorrectCount}
        incorrectCount={wordIncorrectCount}
        totalScore={totalScore}
      />
    );
  }
}

export default LearningRoute;
