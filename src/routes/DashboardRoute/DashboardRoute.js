import React, { Component } from 'react';
import SpacedRepetitionService from '../../services/spaced-repetition-api-service';

class DashboardRoute extends Component {
  state = {
    language: '',
    words: [],
  };

  componentDidMount() {
    SpacedRepetitionService.getLanguageAndWords().then((res) => {
      this.setState({
        language: res.language,
        words: res.words,
      });
    });
  }

  renderWords() {
    const words = this.state.words;

    return words.map((word, i) => {
      return (
        <li key={i} className="dashboard-word-list-item">
          <h4 className="dashboard-word">{word.original}</h4>
          <div className="dashboard-word-counts">
            correct answer count: <span>{word.correct_count}</span>
            <br />
            incorrect answer count: <span>{word.incorrect_count}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    const { name, total_score } = this.state.language;

    return (
      <section>
        <h2 className="dashboard-language-name">{name}</h2>
        <div>Total correct answers: {total_score}</div>
        <a href="/learn">Start practicing</a>
        <h3 className="dashboard-subtitle">Words to practice</h3>
        <ul className="dashboard-word-list">{this.renderWords()}</ul>
      </section>
    );
  }
}

export default DashboardRoute;
