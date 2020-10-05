import React, { Component } from 'react';

class DashboardRoute extends Component {
  renderWords() {
    const words = [
      {
        id: 1,
        original: 'original 1',
        translation: 'translation 1',
        memory_value: 0,
        incorrect_count: 0,
        correct_count: 0,
        language_id: 1,
        next: 2,
      },
      {
        id: 2,
        original: 'original 2',
        translation: 'translation 2',
        memory_value: 0,
        incorrect_count: 0,
        correct_count: 2,
        language_id: 1,
        next: 3,
      },
      {
        id: 3,
        original: 'original 3',
        translation: 'translation 3',
        memory_value: 0,
        incorrect_count: 3,
        correct_count: 6,
        language_id: 1,
        next: 4,
      },
      {
        id: 4,
        original: 'original 4',
        translation: 'translation 4',
        memory_value: 0,
        incorrect_count: 2,
        correct_count: 6,
        language_id: 1,
        next: 5,
      },
      {
        id: 5,
        original: 'original 5',
        translation: 'translation 5',
        memory_value: 0,
        incorrect_count: 0,
        correct_count: 9,
        language_id: 1,
        next: null,
      },
    ];
    return words.map((word) => {
      return (
        <li className="word-list-item">
          <h4>{word.original}</h4>
          correct answer count: {word.correct_count}
          <br />
          incorrect answer count: {word.incorrect_count}
        </li>
      );
    });
  }

  render() {
    const language = { name: 'Test language 1', total_score: '7' }; //TODO api call
    const { name, total_score } = language;

    return (
      <section>
        <h2>{name}</h2>
        <div>Total correct answers: {total_score}</div>
        <a href="/learn">Start practicing</a>
        <h3>Words to practice</h3>
        <ul className="word-list">{this.renderWords()}</ul>
      </section>
    );
  }
  /*
words.forEach((word, idx) => {
        cy.get('main section li').eq(idx).within($li => {

          cy.get('h4').should('have.text', word.original)

          cy.root()
            .should(
              'contain',
              `correct answer count: ${word.correct_count}`
            )

          cy.root()
            .should(
              'contain',
              `incorrect answer count: ${word.incorrect_count}`
            )
        })
*/
}

export default DashboardRoute;
