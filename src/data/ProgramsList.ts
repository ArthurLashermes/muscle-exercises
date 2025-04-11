import { Program } from '../models/Programs';
import { Exercise, exercises } from '../data/exercises';

const getExerciseByName = (name: string): Exercise | undefined =>
    exercises.find(e => e.name === name);

export const programList: Program[] = [
  {
    id: '1',
    name: 'Push Pull Leg',
    sections: [
        {
          name: 'Push',
          exercises: [
            getExerciseByName('Développé couché'),
            getExerciseByName('Dips'),
            getExerciseByName('Développé militaire'),
            getExerciseByName('Extensions des triceps'),
            getExerciseByName('Élévations latérales'),
          ].filter(Boolean) as Exercise[],
        },
        {
          name: 'Pull',
          exercises: [
            getExerciseByName('Tractions'),
            getExerciseByName('Lat pulldown'),
            getExerciseByName('Curl marteau'),
            getExerciseByName('Face pull'),
            getExerciseByName('Curl biceps'),
          ].filter(Boolean) as Exercise[],
        },
        {
          name: 'Legs',
          exercises: [
            getExerciseByName('Squat'),
            getExerciseByName('Extensions de jambes'),
            getExerciseByName('Presse à cuisses'),
            getExerciseByName('Soulevé de terre'),
            getExerciseByName('Deadlift'),
          ].filter(Boolean) as Exercise[],
        }
      ]
  },
  {
    id: '2',
    name: 'Full Body',
    exercises: [
      getExerciseByName('Développé couché'),
      getExerciseByName('Développé militaire'),
      getExerciseByName('Extensions des triceps'),
      getExerciseByName('Squat'),
      getExerciseByName('Curl marteau'),
    ].filter(Boolean) as Exercise[],
  },
  {
    id: '3',
    name: 'Split body',
    sections: [
      { name: 'Upper Body', 
        exercises: [
          getExerciseByName('Développé couché'),
          getExerciseByName('Extensions des triceps'),
          getExerciseByName('Élévations latérales'),
          getExerciseByName('Lat pulldown'),
        ].filter(Boolean) as Exercise[],
      },
      { name: 'Lower Body', 
        exercises: [
            getExerciseByName('Squat'),
            getExerciseByName('Extensions de jambes'),
            getExerciseByName('Presse à cuisses'),
            getExerciseByName('Soulevé de terre'),
            getExerciseByName('Deadlift'),
        ].filter(Boolean) as Exercise[],
      }
    ],
  },
];
