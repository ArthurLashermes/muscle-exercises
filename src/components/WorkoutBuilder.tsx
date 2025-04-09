import React, { useState } from 'react';
import { Exercise } from '../data/exercises';
import { Workout, WorkoutExercise } from '../types/workout';
import './WorkoutBuilder.css';

interface WorkoutBuilderProps {
  exercises: Exercise[];
  onSave: (workout: Workout) => void;
  onCancel: () => void;
}

const WorkoutBuilder: React.FC<WorkoutBuilderProps> = ({ exercises, onSave, onCancel }) => {
  const [workoutName, setWorkoutName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<WorkoutExercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('');
  const [sets, setSets] = useState<number>(3);
  const [reps, setReps] = useState<number>(12);
  const [restTime, setRestTime] = useState<number>(60);
  const [showExerciseForm, setShowExerciseForm] = useState(false);

  const handleAddExercise = () => {
    if (!selectedExercise) return;

    const newExercise: WorkoutExercise = {
      exerciseId: selectedExercise,
      sets,
      reps,
      restTime
    };

    setSelectedExercises([...selectedExercises, newExercise]);
    setSelectedExercise('');
    setSets(3);
    setReps(12);
    setRestTime(60);
    setShowExerciseForm(false);
  };

  const handleRemoveExercise = (index: number) => {
    const updatedExercises = selectedExercises.filter((_, i) => i !== index);
    setSelectedExercises(updatedExercises);
  };

  const handleSave = () => {
    if (!workoutName) return;

    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: workoutName,
      exercises: selectedExercises,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onSave(newWorkout);
  };

  return (
    <div className="workout-builder">
      <h2>Créer une nouvelle séance</h2>
      
      <div className="workout-name">
        <label htmlFor="workoutName">Nom de la séance:</label>
        <input
          type="text"
          id="workoutName"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          placeholder="Entrez le nom de la séance"
        />
      </div>

      <div className="workout-actions-top">
        <button 
          onClick={() => setShowExerciseForm(!showExerciseForm)} 
          className="toggle-exercise-form-btn"
        >
          {showExerciseForm ? "Masquer le formulaire d'exercice" : "Ajouter un exercice"}
        </button>
      </div>

      {showExerciseForm && (
        <div className="exercise-form">
          <h3>Ajouter un exercice</h3>
          
          <div className="form-group">
            <label htmlFor="exercise">Exercice:</label>
            <select
              id="exercise"
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              <option value="">Sélectionnez un exercice</option>
              {exercises.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sets">Séries:</label>
            <input
              type="number"
              id="sets"
              value={sets}
              onChange={(e) => setSets(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reps">Répétitions:</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="restTime">Temps de récupération (secondes):</label>
            <input
              type="number"
              id="restTime"
              value={restTime}
              onChange={(e) => setRestTime(Number(e.target.value))}
              min="0"
              step="15"
            />
          </div>

          <button onClick={handleAddExercise} className="add-exercise-btn">
            Ajouter l'exercice
          </button>
        </div>
      )}

      <div className="selected-exercises">
        <h3>Exercices de la séance ({selectedExercises.length})</h3>
        {selectedExercises.length === 0 ? (
          <p>Aucun exercice ajouté</p>
        ) : (
          <ul>
            {selectedExercises.map((workoutExercise, index) => {
              const exercise = exercises.find(e => e.id === workoutExercise.exerciseId);
              return (
                <li key={index} className="exercise-item">
                  <div className="exercise-info">
                    <h4>{exercise?.name}</h4>
                    <p>{workoutExercise.sets} séries × {workoutExercise.reps} répétitions</p>
                    <p>Temps de récupération: {workoutExercise.restTime} secondes</p>
                  </div>
                  <button
                    onClick={() => handleRemoveExercise(index)}
                    className="remove-exercise-btn"
                  >
                    Supprimer
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="workout-actions">
        <button onClick={handleSave} className="save-btn" disabled={!workoutName}>
          Enregistrer la séance
        </button>
        <button onClick={onCancel} className="cancel-btn">
          Annuler
        </button>
      </div>
    </div>
  );
};

export default WorkoutBuilder; 