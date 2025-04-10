import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExercisePopup from './ExercisePopup';
import { describe, it, expect, vi } from 'vitest';
import { Exercise } from '../../data/exercises';

const mockExercise: Exercise = {
    id: 'squat1',
    name: 'Squat',
    muscle: 'legs',
    description: 'Exercice de jambes',
    difficulty: 'Débutant',
    equipment: 'Barre',
    sets: 4,
    reps: 12,
    restTime: 90
  };

describe('ExercisePopup', () => {
  it('affiche le formulaire de l\'exercice après sélection', async () => {
    const onExerciseClick = vi.fn();
    const workoutNameRef = { current: null };

    render(
      <ExercisePopup
        selectedMuscle="legs"
        filteredExercises={[mockExercise]}
        workoutList={[]}
        workoutName="Mon entraînement"
        showExerciseForm={false}
        selectedExercise={null}
        exerciseDetails={{ sets: 4, reps: 12, restTime: 90 }}
        editingIndex={null}
        isEditingWorkoutName={false}
        workoutNameInputRef={workoutNameRef}
        onClose={() => {}}
        onExerciseClick={onExerciseClick}
        onInputChange={() => {}}
        onWorkoutNameChange={() => {}}
        onWorkoutNameKeyDown={() => {}}
        onWorkoutNameSubmit={() => {}}
        onEditExercise={() => {}}
        onRemoveFromWorkout={() => {}}
        onAddToWorkout={() => {}}
        onGeneratePDF={() => {}}
        setShowExerciseForm={() => {}}
        setIsEditingWorkoutName={() => {}}
      />
    );

    // Vérifie que le nom de l'exercice s'affiche
    const exercise = screen.getByText('Squat');
    expect(exercise).toBeInTheDocument();

    // Simule un clic sur l’exercice
    await userEvent.click(exercise);
    expect(onExerciseClick).toHaveBeenCalledWith(mockExercise);
  });
});
