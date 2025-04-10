import React, { useState } from 'react';
import BodyView from './BodyView';
import '../styles/Programs.css';

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    push: false,
    pull: false,
    leg: false
  });

  const programs = [
    {
      id: 'push-pull-leg',
      name: 'Push Pull Leg',
      pushExercises: [
        'Développé couché',
        'Ecartés avec haltères',
        'Dips',
        'Extension des triceps',
        'Développé militaire'
      ],
      pullExercises: [
        'Tractions',
        'Lat pulldown',
        'Rowing Barre',
        'Curl biceps',
        'Curl marteau'
      ],
      legExercises: [
        'Squat',
        'Extension des jambes',
        'Presse à cuisse',
        'Extensions des mollets debout'
      ]
    }
  ];

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="programs-container">
      <div className="program-content">
        <div className="body-view-container">
          <BodyView isHomePage={false} />
        </div>
        <div className="program-menu">
          <h2>Programmes</h2>
          <ul className="program-list">
            {programs.map(program => (
              <li
                key={program.id}
                className={`program-item ${selectedProgram === program.id ? 'active' : ''}`}
                onClick={() => setSelectedProgram(program.id)}
              >
                {program.name}
              </li>
            ))}
          </ul>
          {selectedProgramData && (
            <div className="program-details">
              <div className="program-section">
                <h3 onClick={() => toggleSection('push')} className="section-header">
                  Push
                  <span className={`arrow ${expandedSections.push ? 'expanded' : ''}`}>▼</span>
                </h3>
                {expandedSections.push && (
                  <ul>
                    {selectedProgramData.pushExercises.map((exercise, index) => (
                      <li key={index}>{exercise}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="program-section">
                <h3 onClick={() => toggleSection('pull')} className="section-header">
                  Pull
                  <span className={`arrow ${expandedSections.pull ? 'expanded' : ''}`}>▼</span>
                </h3>
                {expandedSections.pull && (
                  <ul>
                    {selectedProgramData.pullExercises.map((exercise, index) => (
                      <li key={index}>{exercise}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="program-section">
                <h3 onClick={() => toggleSection('leg')} className="section-header">
                  Leg
                  <span className={`arrow ${expandedSections.leg ? 'expanded' : ''}`}>▼</span>
                </h3>
                {expandedSections.leg && (
                  <ul>
                    {selectedProgramData.legExercises.map((exercise, index) => (
                      <li key={index}>{exercise}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs; 