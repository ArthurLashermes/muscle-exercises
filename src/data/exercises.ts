export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  equipment?: string;
  description: string;
  sets?: number;
  reps?: number;
  restTime?: number;
}

export const exercises: Exercise[] = [
  // Pectoraux
  {
    id: '1',
    name: 'Développé couché',
    muscle: 'pecs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice de base pour développer la poitrine en position couchée sur un banc.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '2',
    name: 'Écartés avec haltères',
    muscle: 'pecs',
    difficulty: 'Débutant',
    equipment: 'Haltères et banc',
    description: 'Mouvement d\'ouverture des bras pour cibler les fibres externes des pectoraux.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '3',
    name: 'Pompes',
    muscle: 'pecs',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice au poids du corps pour renforcer la poitrine et les triceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '4',
    name: 'Développé couché incliné',
    muscle: 'pecs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc incliné',
    description: 'Variante du développé couché qui cible davantage la partie supérieure des pectoraux.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Quadriceps
  {
    id: '5',
    name: 'Squat',
    muscle: 'quadriceps',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice fondamental pour les jambes, sollicitant principalement les quadriceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '6',
    name: 'Extensions de jambes',
    muscle: 'quadriceps',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions',
    description: 'Exercice d\'isolation pour les quadriceps sur machine.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '7',
    name: 'Presse à cuisses',
    muscle: 'quadriceps',
    difficulty: 'Débutant',
    equipment: 'Machine à presse',
    description: 'Exercice sur machine pour développer la force des quadriceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '8',
    name: 'Fentes',
    muscle: 'quadriceps',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères ou barre',
    description: 'Exercice unilatéral qui renforce les quadriceps et améliore l\'équilibre.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Ischio-jambiers
  {
    id: '9',
    name: 'Leg curl',
    muscle: 'ischios',
    difficulty: 'Débutant',
    equipment: 'Machine à ischio',
    description: 'Exercice d\'isolation pour les ischio-jambiers en position couchée.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '10',
    name: 'Good morning',
    muscle: 'ischios',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour renforcer les ischio-jambiers et le bas du dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '11',
    name: 'Soulevé de terre roumain',
    muscle: 'ischios',
    difficulty: 'Avancé',
    equipment: 'Barre',
    description: 'Variante du soulevé de terre qui cible davantage les ischio-jambiers.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '12',
    name: 'Extensions de hanche',
    muscle: 'ischios',
    difficulty: 'Débutant',
    equipment: 'Machine ou bande élastique',
    description: 'Exercice d\'isolation pour les ischio-jambiers en position debout.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Mollets
  {
    id: '13',
    name: 'Extensions des mollets debout',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à mollets',
    description: 'Exercice pour développer les mollets en position debout.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '14',
    name: 'Extensions des mollets assis',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à mollets assis',
    description: 'Exercice pour cibler les mollets en position assise.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '15',
    name: 'Extensions des mollets à la presse',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à presse',
    description: 'Exercice pour les mollets utilisant la machine à presse.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Adducteurs
  {
    id: '16',
    name: 'Adduction à la machine',
    muscle: 'adducteurs',
    difficulty: 'Débutant',
    equipment: 'Machine à adduction',
    description: 'Exercice pour renforcer les muscles adducteurs de la cuisse.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '17',
    name: 'Fentes latérales',
    muscle: 'adducteurs',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères',
    description: 'Exercice qui sollicite les adducteurs en plus des quadriceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '18',
    name: 'Sumo squat',
    muscle: 'adducteurs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre ou haltères',
    description: 'Variante du squat avec les pieds écartés qui cible davantage les adducteurs.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Biceps
  {
    id: '19',
    name: 'Curl biceps',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice de base pour développer les biceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '20',
    name: 'Curl marteau',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltères',
    description: 'Variante du curl qui cible davantage le biceps brachial.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '21',
    name: 'Curl concentré',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltère',
    description: 'Exercice d\'isolation pour les biceps en position assise.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '22',
    name: 'Curl à la barre EZ',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Barre EZ',
    description: 'Exercice pour les biceps utilisant une barre EZ pour un meilleur confort.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Épaules
  {
    id: '23',
    name: 'Développé militaire',
    muscle: 'epaules',
    difficulty: 'Intermédiaire',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour développer les épaules en position debout.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '24',
    name: 'Élévations latérales',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Haltères',
    description: 'Exercice d\'isolation pour les deltoïdes latéraux.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '25',
    name: 'Élévations frontales',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice pour cibler les deltoïdes antérieurs.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '26',
    name: 'Face pull',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les deltoïdes postérieurs et la santé des épaules.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Fessiers
  {
    id: '27',
    name: 'Hip thrust',
    muscle: 'fessiers',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice ciblé pour les fessiers en position couchée.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '28',
    name: 'Squat bulgare',
    muscle: 'fessiers',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères',
    description: 'Exercice unilatéral qui sollicite fortement les fessiers.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '29',
    name: 'Extensions de hanche à la machine',
    muscle: 'fessiers',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions de hanche',
    description: 'Exercice d\'isolation pour les fessiers sur machine.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '30',
    name: 'Pont fessier',
    muscle: 'fessiers',
    difficulty: 'Débutant',
    equipment: 'Aucun ou bande élastique',
    description: 'Exercice de base pour renforcer les fessiers au poids du corps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Abdominaux
  {
    id: '31',
    name: 'Crunchs',
    muscle: 'abdos',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice de base pour les abdominaux.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '32',
    name: 'Planche',
    muscle: 'abdos',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice isométrique pour renforcer les abdominaux et le core.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '33',
    name: 'Relevé de jambes',
    muscle: 'abdos',
    difficulty: 'Intermédiaire',
    equipment: 'Barre de traction ou banc',
    description: 'Exercice pour les abdominaux inférieurs.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '34',
    name: 'Ab wheel rollout',
    muscle: 'abdos',
    difficulty: 'Avancé',
    equipment: 'Roue abdominale',
    description: 'Exercice avancé pour renforcer les abdominaux et le core.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Dos
  {
    id: '35',
    name: 'Tractions',
    muscle: 'dos',
    difficulty: 'Avancé',
    equipment: 'Barre de traction',
    description: 'Exercice complet pour le dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '36',
    name: 'Rowing barre',
    muscle: 'dos',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour développer l\'épaisseur du dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '37',
    name: 'Rowing haltère',
    muscle: 'dos',
    difficulty: 'Intermédiaire',
    equipment: 'Haltère et banc',
    description: 'Exercice unilatéral pour le dos qui permet une plus grande amplitude de mouvement.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '38',
    name: 'Lat pulldown',
    muscle: 'dos',
    difficulty: 'Débutant',
    equipment: 'Machine à poulie haute',
    description: 'Exercice pour développer la largeur du dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Trapèzes
  {
    id: '39',
    name: 'Haussement d\'épaules',
    muscle: 'trapezes',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice pour développer les trapèzes.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '40',
    name: 'Haussement d\'épaules à la barre',
    muscle: 'trapezes',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Variante du haussement d\'épaules avec une barre.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '41',
    name: 'Face pull',
    muscle: 'trapezes',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les trapèzes moyens et inférieurs.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Lombaires
  {
    id: '42',
    name: 'Extensions du dos',
    muscle: 'lombaires',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions du dos',
    description: 'Exercice pour renforcer les muscles lombaires.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '43',
    name: 'Good morning',
    muscle: 'lombaires',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour renforcer les muscles du bas du dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '44',
    name: 'Superman',
    muscle: 'lombaires',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice au poids du corps pour renforcer les muscles du bas du dos.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Triceps
  {
    id: '45',
    name: 'Extensions des triceps',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Câble ou haltère',
    description: 'Exercice d\'isolation pour les triceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '46',
    name: 'Dips',
    muscle: 'triceps',
    difficulty: 'Intermédiaire',
    equipment: 'Barres parallèles ou banc',
    description: 'Exercice au poids du corps pour les triceps.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '47',
    name: 'Extensions des triceps à la poulie haute',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les triceps utilisant une poulie haute.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '48',
    name: 'Extensions des triceps avec haltère',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Haltère',
    description: 'Exercice d\'isolation pour les triceps avec un haltère.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Obliques
  {
    id: '49',
    name: 'Russian twist',
    muscle: 'obliques',
    difficulty: 'Intermédiaire',
    equipment: 'Haltère ou poids',
    description: 'Exercice pour les muscles obliques de l\'abdomen.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '50',
    name: 'Crunchs latéraux',
    muscle: 'obliques',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice pour cibler les obliques.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '51',
    name: 'Woodchopper',
    muscle: 'obliques',
    difficulty: 'Intermédiaire',
    equipment: 'Câble ou haltère',
    description: 'Exercice de rotation pour les obliques.',
    sets: 3,
    reps: 10,
    restTime: 60
  },

  // Avant-bras
  {
    id: '52',
    name: 'Curl des poignets',
    muscle: 'avant-bras',
    difficulty: 'Débutant',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour renforcer les avant-bras.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '53',
    name: 'Extensions des poignets',
    muscle: 'avant-bras',
    difficulty: 'Débutant',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour les extenseurs des avant-bras.',
    sets: 3,
    reps: 10,
    restTime: 60
  },
  {
    id: '54',
    name: 'Curl inversé',
    muscle: 'avant-bras',
    difficulty: 'Intermédiaire',
    equipment: 'Barre EZ ou haltères',
    description: 'Exercice qui sollicite fortement les avant-bras.',
    sets: 3,
    reps: 10,
    restTime: 60
  }
]; 