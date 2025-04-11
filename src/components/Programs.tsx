import React, { useState } from 'react';
import BodyView from './BodyView';
import '../styles/Programs.css';
import { programList } from '../data/ProgramsList';
import { exercises } from '../data/exercises';

const Programs: React.FC = () => {
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);
  const [highlightedMuscle, setHighlightedMuscle] = useState<string | null>(null);


  const getMuscleIdByExerciseName = (exerciseName: string): string | null => {
    const exercise = exercises.find(e => e.name === exerciseName);
    return exercise ? exercise.muscle : null;
  };
  

  const handleExerciseClick = (exerciseName: string) => {
    const muscleId = getMuscleIdByExerciseName(exerciseName);
    if (muscleId) {
      setHighlightedMuscle(muscleId);
    }
  };

  const handleProgramToggle = (programId: string) => {
    setExpandedProgramId(prev => (prev === programId ? null : programId));
  };

  return (
    <div className="programs-container">
      <div className="program-content">
        <div className="body-view-container">
          <BodyView isHomePage={false} highlightedMuscle={highlightedMuscle} />
        </div>

        <div className="program-menu">
          <h2>Programmes</h2>
          <div className="program-list">
            {programList.map(program => (
              <div key={program.id} className="program-item">
                <button
                  className={`program-button ${expandedProgramId === program.id ? 'active' : ''}`}
                  onClick={() => handleProgramToggle(program.id)}
                >
                  {program.name}
                </button>

                {expandedProgramId === program.id && (
                  <div className="program-details">
                    {program.sections ? (
                      <div className="program-sections">
                        {program.sections.map((section, index) => (
                          <div key={index} className="program-section">
                            <h4>{section.name}</h4>
                            <ul className="exercise-list">
                              {section.exercises.map((exercise, idx) => (
                                <li
                                  key={idx}
                                  className="exercise-item"
                                  onClick={() => handleExerciseClick(exercise.name)}
                                >
                                  {exercise.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="exercise-list">
                        {program.exercises?.map((exercise, index) => (
                          <li
                            key={index}
                            className="exercise-item"
                            onClick={() => handleExerciseClick(exercise.name)}
                          >
                            {exercise.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Programs; 