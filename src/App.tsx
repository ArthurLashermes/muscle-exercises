import React, { useEffect } from 'react';
import './App.css';
import BodyView from './components/BodyView';
import { measurePageLoad, measureFirstInputDelay } from './performance';

function App() {
  useEffect(() => {
    // Mesurer le temps de chargement de la page
    measurePageLoad('home');
    
    // Mesurer le délai de première entrée (FID)
    measureFirstInputDelay();
  }, []);

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
