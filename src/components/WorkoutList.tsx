import React from 'react';
import { Workout } from '../types/workout';
import { Exercise } from '../data/exercises';
import './WorkoutList.css';

interface WorkoutListProps {
  workouts: Workout[];
  exercises: Exercise[];
  onSelectWorkout: (workout: Workout) => void;
  onDeleteWorkout: (workoutId: string) => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ 
  workouts, 
  exercises, 
  onSelectWorkout, 
  onDeleteWorkout 
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="workout-list">
      <h2>Mes séances d'entraînement</h2>
      
      {workouts.length === 0 ? (
        <p className="no-workouts">Aucune séance d'entraînement créée</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id} className="workout-item">
              <div className="workout-header">
                <h3>{workout.name}</h3>
                <div className="workout-date">
                  Créée le: {formatDate(workout.createdAt)}
                </div>
              </div>
              
              <div className="workout-exercises">
                <h4>Exercices ({workout.exercises.length})</h4>
                {workout.exercises.length === 0 ? (
                  <p>Aucun exercice dans cette séance</p>
                ) : (
                  <ul>
                    {workout.exercises.map((workoutExercise, index) => {
                      const exercise = exercises.find(e => e.id === workoutExercise.exerciseId);
                      return (
                        <li key={index} className="exercise-summary">
                          <span className="exercise-name">{exercise?.name}</span>
                          <span className="exercise-details">
                            {workoutExercise.sets} séries × {workoutExercise.reps} répétitions
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              
              <div className="workout-actions">
                <button 
                  onClick={() => onSelectWorkout(workout)} 
                  className="view-workout-btn"
                >
                  Voir la séance
                </button>
                <button 
                  onClick={() => onDeleteWorkout(workout.id)} 
                  className="delete-workout-btn"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList; 