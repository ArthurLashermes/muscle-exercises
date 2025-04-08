import React, { useState, useEffect, useRef } from 'react';
import { exercises, Exercise } from '../data/exercises';
import './BodyView.css';

const BodyView: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Charger le SVG externe
    fetch('/corps.svg')
      .then(response => response.text())
      .then(svgText => {
        if (svgRef.current) {
          // Insérer le contenu du SVG dans notre élément
          svgRef.current.innerHTML = svgText;
          
          // Ajouter les gestionnaires d'événements aux groupes cliquables
          const muscleGroups = svgRef.current.querySelectorAll('g[id]');
          muscleGroups.forEach(group => {
            // Exclure le groupe "corps" des éléments cliquables
            if (group.id !== 'corps') {
              group.classList.add('muscle');
              group.addEventListener('click', () => handleMuscleClick(group.id));
            }
          });
        }
      })
      .catch(error => console.error('Erreur lors du chargement du SVG:', error));
  }, []);

  const handleMuscleClick = (muscleId: string) => {
    setSelectedMuscle(muscleId === selectedMuscle ? null : muscleId);
    setShowPopup(true);
    
    // Mettre à jour les classes CSS pour le style de sélection
    if (svgRef.current) {
      const allMuscles = svgRef.current.querySelectorAll('.muscle');
      allMuscles.forEach(muscle => {
        if (muscle.id === muscleId) {
          muscle.classList.toggle('selected');
        } else {
          muscle.classList.remove('selected');
        }
      });
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMuscle(null);
    
    // Réinitialiser les classes CSS
    if (svgRef.current) {
      const allMuscles = svgRef.current.querySelectorAll('.muscle');
      allMuscles.forEach(muscle => {
        muscle.classList.remove('selected');
      });
    }
  };

  const filteredExercises = selectedMuscle
    ? exercises.filter((exercise: Exercise) => exercise.muscle === selectedMuscle)
    : [];

  return (
    <div className="body-container">
      <div className="body-view">
        <div className="svg-container">
          <svg ref={svgRef} viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
            {/* Le contenu du SVG sera chargé dynamiquement */}
          </svg>
        </div>

        {showPopup && selectedMuscle && (
          <div className="exercises-popup">
            <div className="popup-header">
              <h2>Exercices pour {selectedMuscle}</h2>
              <button className="close-button" onClick={handleClosePopup}>×</button>
            </div>
            <div className="popup-content">
              <ul>
                {filteredExercises.map((exercise: Exercise) => (
                  <li key={exercise.id}>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.description}</p>
                    <span className="difficulty">{exercise.difficulty}</span>
                    {exercise.equipment && (
                      <div className="equipment">
                        <strong>Équipement :</strong> {exercise.equipment}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyView; 