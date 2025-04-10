import React from 'react';
import { Exercise } from '../../data/exercises';

interface ExercisePopupProps {
  selectedMuscle: string;
  filteredExercises: Exercise[];
  workoutList: Exercise[];
  workoutName: string;
  showExerciseForm: boolean;
  selectedExercise: Exercise | null;
  exerciseDetails: {
    sets: number;
    reps: number;
    restTime: number;
  };
  editingIndex: number | null;
  isEditingWorkoutName: boolean;
  workoutNameInputRef: React.RefObject<HTMLInputElement | null>;
  onClose: () => void;
  onExerciseClick: (exercise: Exercise) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWorkoutNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWorkoutNameKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onWorkoutNameSubmit: (e: React.FormEvent) => void;
  onEditExercise: (index: number) => void;
  onRemoveFromWorkout: (index: number) => void;
  onAddToWorkout: () => void;
  onGeneratePDF: () => void;
  setShowExerciseForm: (v: boolean) => void;
  setIsEditingWorkoutName: (v: boolean) => void;
}

const ExercisePopup: React.FC<ExercisePopupProps> = ({
  selectedMuscle,
  filteredExercises,
  workoutList,
  workoutName,
  showExerciseForm,
  selectedExercise,
  exerciseDetails,
  editingIndex,
  isEditingWorkoutName,
  workoutNameInputRef,
  onClose,
  onExerciseClick,
  onInputChange,
  onWorkoutNameChange,
  onWorkoutNameKeyDown,
  onWorkoutNameSubmit,
  onEditExercise,
  onRemoveFromWorkout,
  onAddToWorkout,
  onGeneratePDF,
  setShowExerciseForm,
  setIsEditingWorkoutName
}) => {
  return (
    <div className="exercises-popup">
      <div className="popup-header">
        <div className="popup-header-content">
          <img src="/logo.png" alt="Logo" className="popup-logo" />
          <h2>Exercices pour {selectedMuscle}</h2>
        </div>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="popup-content">
        {!showExerciseForm ? (
          <>
            <div className="workout-name-container">
              {isEditingWorkoutName ? (
                <form onSubmit={onWorkoutNameSubmit} className="workout-name-form">
                  <input
                    ref={workoutNameInputRef}
                    type="text"
                    value={workoutName}
                    onChange={onWorkoutNameChange}
                    onBlur={() => setIsEditingWorkoutName(false)}
                    onKeyDown={onWorkoutNameKeyDown}
                    className="workout-name-input"
                    placeholder="Nom de l'entraînement"
                  />
                </form>
              ) : (
                <div className="workout-name-display" onClick={() => setIsEditingWorkoutName(true)}>
                  <h3>{workoutName}</h3>
                  <button className="edit-name-button">✎</button>
                </div>
              )}
            </div>

            <div className="workout-actions">
              <button
                className="generate-pdf-button"
                onClick={onGeneratePDF}
                disabled={workoutList.length === 0}
                title="Générer PDF"
              >
                📋
              </button>
            </div>

            {workoutList.length > 0 ? (
              <ul className="workout-list">
                {workoutList.map((exercise, index) => (
                  <li key={`${exercise.id}-${index}`} className="workout-item">
                    <div className="workout-item-header">
                      <h4>{exercise.name}</h4>
                      <div className="workout-item-actions">
                        <button className="edit-button" onClick={() => onEditExercise(index)}>✎</button>
                        <button className="remove-button" onClick={() => onRemoveFromWorkout(index)}>×</button>
                      </div>
                    </div>
                    <div className="workout-details">
                      <span>{exercise.sets} séries</span>
                      <span>{exercise.reps} répétitions</span>
                      <span>{exercise.restTime} sec de repos</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-workout">Aucun exercice dans votre entraînement</p>
            )}

            <h3>Exercices disponibles</h3>
            <ul>
              {filteredExercises.map((exercise: Exercise) => (
                <li key={exercise.id} onClick={() => onExerciseClick(exercise)}>
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
          </>
        ) : (
          <div className="exercise-form">
            <h3>{editingIndex !== null ? 'Modifier l\'exercice' : 'Ajouter à l\'entraînement'}</h3>
            <div className="form-group">
              <label>Exercice :</label>
              <p className="selected-exercise">{selectedExercise?.name}</p>
            </div>
            <div className="form-group">
              <label htmlFor="sets">Séries :</label>
              <input
                type="number"
                id="sets"
                name="sets"
                value={exerciseDetails.sets}
                onChange={onInputChange}
                min="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reps">Répétitions :</label>
              <input
                type="number"
                id="reps"
                name="reps"
                value={exerciseDetails.reps}
                onChange={onInputChange}
                min="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="restTime">Temps de repos (secondes) :</label>
              <input
                type="number"
                id="restTime"
                name="restTime"
                value={exerciseDetails.restTime}
                onChange={onInputChange}
                min="0"
              />
            </div>
            <div className="form-actions">
              <button className="cancel-button" onClick={() => setShowExerciseForm(false)}>Annuler</button>
              <button className="add-button" onClick={onAddToWorkout}>
                {editingIndex !== null ? 'Mettre à jour' : 'Ajouter à l\'entraînement'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisePopup;
