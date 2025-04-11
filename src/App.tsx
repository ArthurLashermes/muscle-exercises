import React, { useState } from 'react';
import './App.css';
import BodyView from './components/BodyView';
import Programs from './components/Programs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'wiki' | 'programs'>('wiki');

  const renderPage = () => {
    switch (currentPage) {
      case 'wiki':
        return <BodyView isHomePage={true} />;
      case 'programs':
        return <Programs />;
      default:
        return <BodyView isHomePage={true} />;
    }
  };

  return (
    <div className="app">
      <nav className="nav-menu">
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-right">
          <button
            className={`nav-button ${currentPage === 'wiki' ? 'active' : ''}`}
            onClick={() => setCurrentPage('wiki')}
          >
            Wiki
          </button>
          <button
            className={`nav-button ${currentPage === 'programs' ? 'active' : ''}`}
            onClick={() => setCurrentPage('programs')}
          >
            Programmes
          </button>
        </div>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
