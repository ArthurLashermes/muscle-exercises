import React from 'react';
import '../styles/Navigation.css';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <button 
            className="navigation-link"
            onClick={() => onNavigate('home')}
          >
            Accueil
          </button>
        </li>
        <li>
          <button 
            className="navigation-link"
            onClick={() => onNavigate('programs')}
          >
            Programmes
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 