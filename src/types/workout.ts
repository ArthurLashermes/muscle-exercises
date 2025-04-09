export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  restTime: number; // en secondes
}

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  createdAt: Date;
  updatedAt: Date;
} 