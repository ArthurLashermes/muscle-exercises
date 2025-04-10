import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BodyView from './components/BodyView';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <BodyView />;
      case 'programs':
        return <div>Toto - Page des programmes</div>;
      default:
        return <BodyView />;
    }
  };

  return (
    <div className="App">
      <Navigation onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
