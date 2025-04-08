export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  equipment?: string;
  description: string;
}

export const exercises: Exercise[] = [
  // Pectoraux
  {
    id: '1',
    name: 'Développé couché',
    muscle: 'pecs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice de base pour développer la poitrine en position couchée sur un banc.'
  },
  {
    id: '2',
    name: 'Écartés avec haltères',
    muscle: 'pecs',
    difficulty: 'Débutant',
    equipment: 'Haltères et banc',
    description: 'Mouvement d\'ouverture des bras pour cibler les fibres externes des pectoraux.'
  },
  {
    id: '3',
    name: 'Pompes',
    muscle: 'pecs',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice au poids du corps pour renforcer la poitrine et les triceps.'
  },
  {
    id: '4',
    name: 'Développé couché incliné',
    muscle: 'pecs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc incliné',
    description: 'Variante du développé couché qui cible davantage la partie supérieure des pectoraux.'
  },

  // Quadriceps
  {
    id: '5',
    name: 'Squat',
    muscle: 'quadriceps',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice fondamental pour les jambes, sollicitant principalement les quadriceps.'
  },
  {
    id: '6',
    name: 'Extensions de jambes',
    muscle: 'quadriceps',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions',
    description: 'Exercice d\'isolation pour les quadriceps sur machine.'
  },
  {
    id: '7',
    name: 'Presse à cuisses',
    muscle: 'quadriceps',
    difficulty: 'Débutant',
    equipment: 'Machine à presse',
    description: 'Exercice sur machine pour développer la force des quadriceps.'
  },
  {
    id: '8',
    name: 'Fentes',
    muscle: 'quadriceps',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères ou barre',
    description: 'Exercice unilatéral qui renforce les quadriceps et améliore l\'équilibre.'
  },

  // Ischio-jambiers
  {
    id: '9',
    name: 'Leg curl',
    muscle: 'ischios',
    difficulty: 'Débutant',
    equipment: 'Machine à ischio',
    description: 'Exercice d\'isolation pour les ischio-jambiers en position couchée.'
  },
  {
    id: '10',
    name: 'Good morning',
    muscle: 'ischios',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour renforcer les ischio-jambiers et le bas du dos.'
  },
  {
    id: '11',
    name: 'Soulevé de terre roumain',
    muscle: 'ischios',
    difficulty: 'Avancé',
    equipment: 'Barre',
    description: 'Variante du soulevé de terre qui cible davantage les ischio-jambiers.'
  },
  {
    id: '12',
    name: 'Extensions de hanche',
    muscle: 'ischios',
    difficulty: 'Débutant',
    equipment: 'Machine ou bande élastique',
    description: 'Exercice d\'isolation pour les ischio-jambiers en position debout.'
  },

  // Mollets
  {
    id: '13',
    name: 'Extensions des mollets debout',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à mollets',
    description: 'Exercice pour développer les mollets en position debout.'
  },
  {
    id: '14',
    name: 'Extensions des mollets assis',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à mollets assis',
    description: 'Exercice pour cibler les mollets en position assise.'
  },
  {
    id: '15',
    name: 'Extensions des mollets à la presse',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à presse',
    description: 'Exercice pour les mollets utilisant la machine à presse.'
  },

  // Adducteurs
  {
    id: '16',
    name: 'Adduction à la machine',
    muscle: 'adducteurs',
    difficulty: 'Débutant',
    equipment: 'Machine à adduction',
    description: 'Exercice pour renforcer les muscles adducteurs de la cuisse.'
  },
  {
    id: '17',
    name: 'Fentes latérales',
    muscle: 'adducteurs',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères',
    description: 'Exercice qui sollicite les adducteurs en plus des quadriceps.'
  },
  {
    id: '18',
    name: 'Sumo squat',
    muscle: 'adducteurs',
    difficulty: 'Intermédiaire',
    equipment: 'Barre ou haltères',
    description: 'Variante du squat avec les pieds écartés qui cible davantage les adducteurs.'
  },

  // Biceps
  {
    id: '19',
    name: 'Curl biceps',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice de base pour développer les biceps.'
  },
  {
    id: '20',
    name: 'Curl marteau',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltères',
    description: 'Variante du curl qui cible davantage le biceps brachial.'
  },
  {
    id: '21',
    name: 'Curl concentré',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltère',
    description: 'Exercice d\'isolation pour les biceps en position assise.'
  },
  {
    id: '22',
    name: 'Curl à la barre EZ',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Barre EZ',
    description: 'Exercice pour les biceps utilisant une barre EZ pour un meilleur confort.'
  },

  // Épaules
  {
    id: '23',
    name: 'Développé militaire',
    muscle: 'epaules',
    difficulty: 'Intermédiaire',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour développer les épaules en position debout.'
  },
  {
    id: '24',
    name: 'Élévations latérales',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Haltères',
    description: 'Exercice d\'isolation pour les deltoïdes latéraux.'
  },
  {
    id: '25',
    name: 'Élévations frontales',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice pour cibler les deltoïdes antérieurs.'
  },
  {
    id: '26',
    name: 'Face pull',
    muscle: 'epaules',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les deltoïdes postérieurs et la santé des épaules.'
  },

  // Fessiers
  {
    id: '27',
    name: 'Hip thrust',
    muscle: 'fessiers',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice ciblé pour les fessiers en position couchée.'
  },
  {
    id: '28',
    name: 'Squat bulgare',
    muscle: 'fessiers',
    difficulty: 'Intermédiaire',
    equipment: 'Haltères',
    description: 'Exercice unilatéral qui sollicite fortement les fessiers.'
  },
  {
    id: '29',
    name: 'Extensions de hanche à la machine',
    muscle: 'fessiers',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions de hanche',
    description: 'Exercice d\'isolation pour les fessiers sur machine.'
  },
  {
    id: '30',
    name: 'Pont fessier',
    muscle: 'fessiers',
    difficulty: 'Débutant',
    equipment: 'Aucun ou bande élastique',
    description: 'Exercice de base pour renforcer les fessiers au poids du corps.'
  },

  // Abdominaux
  {
    id: '31',
    name: 'Crunchs',
    muscle: 'abdos',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice de base pour les abdominaux.'
  },
  {
    id: '32',
    name: 'Planche',
    muscle: 'abdos',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice isométrique pour renforcer les abdominaux et le core.'
  },
  {
    id: '33',
    name: 'Relevé de jambes',
    muscle: 'abdos',
    difficulty: 'Intermédiaire',
    equipment: 'Barre de traction ou banc',
    description: 'Exercice pour les abdominaux inférieurs.'
  },
  {
    id: '34',
    name: 'Ab wheel rollout',
    muscle: 'abdos',
    difficulty: 'Avancé',
    equipment: 'Roue abdominale',
    description: 'Exercice avancé pour renforcer les abdominaux et le core.'
  },

  // Dos
  {
    id: '35',
    name: 'Tractions',
    muscle: 'dos',
    difficulty: 'Avancé',
    equipment: 'Barre de traction',
    description: 'Exercice complet pour le dos.'
  },
  {
    id: '36',
    name: 'Rowing barre',
    muscle: 'dos',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour développer l\'épaisseur du dos.'
  },
  {
    id: '37',
    name: 'Rowing haltère',
    muscle: 'dos',
    difficulty: 'Intermédiaire',
    equipment: 'Haltère et banc',
    description: 'Exercice unilatéral pour le dos qui permet une plus grande amplitude de mouvement.'
  },
  {
    id: '38',
    name: 'Lat pulldown',
    muscle: 'dos',
    difficulty: 'Débutant',
    equipment: 'Machine à poulie haute',
    description: 'Exercice pour développer la largeur du dos.'
  },

  // Trapèzes
  {
    id: '39',
    name: 'Haussement d\'épaules',
    muscle: 'trapezes',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice pour développer les trapèzes.'
  },
  {
    id: '40',
    name: 'Haussement d\'épaules à la barre',
    muscle: 'trapezes',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Variante du haussement d\'épaules avec une barre.'
  },
  {
    id: '41',
    name: 'Face pull',
    muscle: 'trapezes',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les trapèzes moyens et inférieurs.'
  },

  // Lombaires
  {
    id: '42',
    name: 'Extensions du dos',
    muscle: 'lombaires',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions du dos',
    description: 'Exercice pour renforcer les muscles lombaires.'
  },
  {
    id: '43',
    name: 'Good morning',
    muscle: 'lombaires',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour renforcer les muscles du bas du dos.'
  },
  {
    id: '44',
    name: 'Superman',
    muscle: 'lombaires',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice au poids du corps pour renforcer les muscles du bas du dos.'
  },

  // Triceps
  {
    id: '45',
    name: 'Extensions des triceps',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Câble ou haltère',
    description: 'Exercice d\'isolation pour les triceps.'
  },
  {
    id: '46',
    name: 'Dips',
    muscle: 'triceps',
    difficulty: 'Intermédiaire',
    equipment: 'Barres parallèles ou banc',
    description: 'Exercice au poids du corps pour les triceps.'
  },
  {
    id: '47',
    name: 'Extensions des triceps à la poulie haute',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Câble',
    description: 'Exercice pour les triceps utilisant une poulie haute.'
  },
  {
    id: '48',
    name: 'Extensions des triceps avec haltère',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Haltère',
    description: 'Exercice d\'isolation pour les triceps avec un haltère.'
  },

  // Obliques
  {
    id: '49',
    name: 'Russian twist',
    muscle: 'obliques',
    difficulty: 'Intermédiaire',
    equipment: 'Haltère ou poids',
    description: 'Exercice pour les muscles obliques de l\'abdomen.'
  },
  {
    id: '50',
    name: 'Crunchs latéraux',
    muscle: 'obliques',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice pour cibler les obliques.'
  },
  {
    id: '51',
    name: 'Woodchopper',
    muscle: 'obliques',
    difficulty: 'Intermédiaire',
    equipment: 'Câble ou haltère',
    description: 'Exercice de rotation pour les obliques.'
  },

  // Avant-bras
  {
    id: '52',
    name: 'Curl des poignets',
    muscle: 'avant-bras',
    difficulty: 'Débutant',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour renforcer les avant-bras.'
  },
  {
    id: '53',
    name: 'Extensions des poignets',
    muscle: 'avant-bras',
    difficulty: 'Débutant',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour les extenseurs des avant-bras.'
  },
  {
    id: '54',
    name: 'Curl inversé',
    muscle: 'avant-bras',
    difficulty: 'Intermédiaire',
    equipment: 'Barre EZ ou haltères',
    description: 'Exercice qui sollicite fortement les avant-bras.'
  }
]; 