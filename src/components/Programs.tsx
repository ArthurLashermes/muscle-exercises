import React, { useState } from 'react';
import BodyView from './BodyView';
import '../styles/Programs.css';
import exercisesData from '../data/exercises.json';

interface Exercise {
  name: string;
  description: string;
  sets: number;
  reps: number;
}

interface Muscle {
  id: string;
  name: string;
  exercises: Exercise[];
}

interface Program {
  id: string;
  name: string;
  exercises: {
    push: Exercise[];
    pull: Exercise[];
    leg: Exercise[];
  };
}

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    push: false,
    pull: false,
    leg: false
  });
  const [highlightedMuscle, setHighlightedMuscle] = useState<string | null>(null);

  const getExercisesByMuscleId = (muscleId: string): Exercise[] => {
    const muscle = exercisesData.muscles.find(m => m.id === muscleId);
    return muscle ? muscle.exercises : [];
  };

  const getMuscleIdByExerciseName = (exerciseName: string): string | null => {
    for (const muscle of exercisesData.muscles) {
      if (muscle.exercises.some(ex => ex.name === exerciseName)) {
        const muscleIdMap: Record<string, string> = {
          'pectoralis': 'pecs',
          'triceps': 'triceps',
          'deltoids': 'epaules',
          'back': 'dos',
          'biceps': 'biceps',
          'quadriceps': 'quadriceps',
          'hamstrings': 'ischio-jambier',
          'calves': 'mollets'
        };
        return muscleIdMap[muscle.id] || null;
      }
    }
    return null;
  };

  const programs: Program[] = [
    {
      id: '1',
      name: 'Push Pull Leg',
      exercises: {
        push: [
          ...getExercisesByMuscleId('pectoralis'),
          ...getExercisesByMuscleId('triceps'),
          ...getExercisesByMuscleId('deltoids')
        ],
        pull: [
          ...getExercisesByMuscleId('back'),
          ...getExercisesByMuscleId('biceps')
        ],
        leg: [
          ...getExercisesByMuscleId('quadriceps'),
          ...getExercisesByMuscleId('hamstrings'),
          ...getExercisesByMuscleId('calves')
        ]
      }
    }
  ];

  const toggleSection = (section: 'push' | 'pull' | 'leg') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleExerciseClick = (exerciseName: string) => {
    const muscleId = getMuscleIdByExerciseName(exerciseName);
    if (muscleId) {
      setHighlightedMuscle(muscleId);
    }
  };

  const handleProgramClick = (program: Program) => {
    if (selectedProgram?.id === program.id) {
      setSelectedProgram(null);
      setExpandedSections({ push: false, pull: false, leg: false });
    } else {
      setSelectedProgram(program);
    }
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
            {programs.map(program => (
              <button
                key={program.id}
                className={`program-button ${selectedProgram?.id === program.id ? 'active' : ''}`}
                onClick={() => handleProgramClick(program)}
              >
                {program.name}
                <span className={`program-arrow ${selectedProgram?.id === program.id ? 'expanded' : ''}`}>▼</span>
              </button>
            ))}
          </div>
          
          {selectedProgram && (
            <div className="program-details">
              <h3>{selectedProgram.name}</h3>
              <div className="program-sections">
                <div className="program-section">
                  <div className="section-header" onClick={() => toggleSection('push')}>
                    <h4>Push</h4>
                    <span className={`arrow ${expandedSections.push ? 'expanded' : ''}`}>▼</span>
                  </div>
                  {expandedSections.push && (
                    <ul className="exercise-list">
                      {selectedProgram.exercises.push.map((exercise, index) => (
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
                
                <div className="program-section">
                  <div className="section-header" onClick={() => toggleSection('pull')}>
                    <h4>Pull</h4>
                    <span className={`arrow ${expandedSections.pull ? 'expanded' : ''}`}>▼</span>
                  </div>
                  {expandedSections.pull && (
                    <ul className="exercise-list">
                      {selectedProgram.exercises.pull.map((exercise, index) => (
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
                
                <div className="program-section">
                  <div className="section-header" onClick={() => toggleSection('leg')}>
                    <h4>Leg</h4>
                    <span className={`arrow ${expandedSections.leg ? 'expanded' : ''}`}>▼</span>
                  </div>
                  {expandedSections.leg && (
                    <ul className="exercise-list">
                      {selectedProgram.exercises.leg.map((exercise, index) => (
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs; 