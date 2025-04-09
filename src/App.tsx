import React from 'react';
import './App.css';
import BodyView from './components/BodyView';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Guide des Exercices Musculaires</h1>
      </header>
      <main className="app-main">
        <BodyView />
      </main>
    </div>
  );
}

export default App;
