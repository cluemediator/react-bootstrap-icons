import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <b>
        Add bootstrap icons in React -
        <a
          href="https://www.cluemediator.com"
          target="_blank"
          rel="noopener">
          Clue Mediator
        </a>
      </b><br />
      <p>
        You're&nbsp;
        <i className="bi bi-hand-index-thumb-fill" />
        &nbsp;awesome!&nbsp;
        <i className="bi bi-emoji-heart-eyes" />
      </p>
      <p>
        Follow&nbsp;
        <i className="bi bi-heart-fill" style={{ color: '#fe251b' }} />
        &nbsp;<span style={{ color: '#3b5998', fontWeight: 'bold' }}>Clue Mediator</span>&nbsp;
        <i className="bi bi-hand-thumbs-up-fill" style={{ color: '#3b5998' }} />
      </p>
    </div>
  );
}

export default App;