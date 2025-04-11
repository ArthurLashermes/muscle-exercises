import { Exercise } from '../data/exercises';

export interface Muscle {
  id: string;
  name: string;
  exercises: Exercise[];
}
