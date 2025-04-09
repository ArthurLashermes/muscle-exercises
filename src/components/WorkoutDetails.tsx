import React from 'react';
import { Workout } from '../types/workout';
import { Exercise } from '../data/exercises';
import './WorkoutDetails.css';

interface WorkoutDetailsProps {
  workout: Workout;
  exercises: Exercise[];
  onClose: () => void;
  onEdit: (workout: Workout) => void;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ 
  workout, 
  exercises, 
  onClose,
  onEdit
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

  const formatRestTime = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds} secondes`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds === 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    return `${minutes} minute${minutes > 1 ? 's' : ''} et ${remainingSeconds} seconde${remainingSeconds > 1 ? 's' : ''}`;
  };

  return (
    <div className="workout-details">
      <div className="workout-details-header">
        <h2>{workout.name}</h2>
        <div className="workout-details-date">
          Créée le: {formatDate(workout.createdAt)}
        </div>
        <button className="close-details-btn" onClick={onClose}>×</button>
      </div>

      <div className="workout-details-content">
        {workout.exercises.length === 0 ? (
          <p className="no-exercises">Aucun exercice dans cette séance</p>
        ) : (
          <div className="exercises-list">
            {workout.exercises.map((workoutExercise, index) => {
              const exercise = exercises.find(e => e.id === workoutExercise.exerciseId);
              return (
                <div key={index} className="exercise-detail-item">
                  <div className="exercise-detail-header">
                    <h3>{exercise?.name}</h3>
                    <span className="exercise-number">Exercice {index + 1}/{workout.exercises.length}</span>
                  </div>
                  
                  <div className="exercise-detail-info">
                    <div className="exercise-detail-row">
                      <span className="exercise-detail-label">Séries:</span>
                      <span className="exercise-detail-value">{workoutExercise.sets}</span>
                    </div>
                    <div className="exercise-detail-row">
                      <span className="exercise-detail-label">Répétitions:</span>
                      <span className="exercise-detail-value">{workoutExercise.reps}</span>
                    </div>
                    <div className="exercise-detail-row">
                      <span className="exercise-detail-label">Temps de récupération:</span>
                      <span className="exercise-detail-value">{formatRestTime(workoutExercise.restTime)}</span>
                    </div>
                  </div>
                  
                  {exercise?.description && (
                    <div className="exercise-description">
                      <h4>Description:</h4>
                      <p>{exercise.description}</p>
                    </div>
                  )}
                  
                  {exercise?.equipment && (
                    <div className="exercise-equipment">
                      <h4>Équipement nécessaire:</h4>
                      <p>{exercise.equipment}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="workout-details-actions">
        <button onClick={() => onEdit(workout)} className="edit-workout-btn">
          Modifier la séance
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails; 