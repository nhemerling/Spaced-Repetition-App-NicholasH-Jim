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
    response: {},
    guess: '',
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const guess = ev.target['learn-guess-input'].value;
    SpacedRepetitionService.postGuess({ guess: guess }).then((res) => {
      const response = this.state.response;
      //response.nextWord = res.nextWord;
      response.nextWord = this.state.word;
      response.wordCorrectCount = res.wordCorrectCount;
      response.wordIncorrectCount = res.wordIncorrectCount;
      response.totalScore = res.totalScore;
      response.answer = res.answer;
      response.isCorrect = res.isCorrect;

      this.setState({
        response: response,
        showFeedback: true,
        guess: guess,
        totalScore: response.totalScore,
        nextWord: res.nextWord
      });
    });
  };

  // getHeadWord = () => {
  //   SpacedRepetitionService.getHeadWord().then((res) => {
  //     this.setState({
  //       word: res.nextWord,
  //       wordCorrectCount: res.wordCorrectCount,
  //       wordIncorrectCount: res.wordIncorrectCount,
  //       totalScore: res.totalScore,
  //     });
  //   });
  // };

  handleTryAnotherWord = () => {
    SpacedRepetitionService.getHeadWord().then((res) => {
      this.setState({
        word: this.state.nextWord,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
        totalScore: this.state.response.totalScore,
        showFeedback: false,
      });
    });
  };

  render() {
    const {
      word,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
      response,
      guess,
    } = this.state;
    return this.state.showFeedback ? (
      <LearningFeedback response={response} guess={guess} handleTryAnotherWord={this.handleTryAnotherWord} />
    ) : (
        <LearningWordPrompt
          word={word}
          correctCount={wordCorrectCount}
          incorrectCount={wordIncorrectCount}
          totalScore={totalScore}
          handleSubmit={this.handleSubmit}
        />
      );
  }
}

export default LearningRoute;
