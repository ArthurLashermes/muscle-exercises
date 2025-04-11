import { Exercise } from '../data/exercises';

export interface ExerciseSection {
  name: string; // ex: "Push", "Upper", "Jour 1"
  exercises: Exercise[];
}

export interface Program {
  id: string;
  name: string;

  // Si le programme est structuré par section (Push Pull Leg)
  sections?: ExerciseSection[];

  // Ou alors c’est juste une liste simple (Full Body)
  exercises?: Exercise[];
}
