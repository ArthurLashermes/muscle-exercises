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
    muscle: 'pectoraux',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice de base pour développer la poitrine en position couchée sur un banc.'
  },
  {
    id: '2',
    name: 'Écartés avec haltères',
    muscle: 'pectoraux',
    difficulty: 'Débutant',
    equipment: 'Haltères et banc',
    description: 'Mouvement d\'ouverture des bras pour cibler les fibres externes des pectoraux.'
  },

  // Quadriceps
  {
    id: '3',
    name: 'Squat',
    muscle: 'quadriceps',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice fondamental pour les jambes, sollicitant principalement les quadriceps.'
  },
  {
    id: '4',
    name: 'Extensions de jambes',
    muscle: 'quadriceps',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions',
    description: 'Exercice d\'isolation pour les quadriceps sur machine.'
  },

  // Ischio-jambiers
  {
    id: '5',
    name: 'Leg curl',
    muscle: 'ischios',
    difficulty: 'Débutant',
    equipment: 'Machine à ischio',
    description: 'Exercice d\'isolation pour les ischio-jambiers en position couchée.'
  },
  {
    id: '6',
    name: 'Good morning',
    muscle: 'ischios',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    description: 'Exercice pour renforcer les ischio-jambiers et le bas du dos.'
  },

  // Mollets
  {
    id: '7',
    name: 'Extensions des mollets debout',
    muscle: 'mollets',
    difficulty: 'Débutant',
    equipment: 'Machine à mollets',
    description: 'Exercice pour développer les mollets en position debout.'
  },

  // Adducteurs
  {
    id: '8',
    name: 'Adduction à la machine',
    muscle: 'adducteurs',
    difficulty: 'Débutant',
    equipment: 'Machine à adduction',
    description: 'Exercice pour renforcer les muscles adducteurs de la cuisse.'
  },

  // Biceps
  {
    id: '9',
    name: 'Curl biceps',
    muscle: 'biceps',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice de base pour développer les biceps.'
  },

  // Épaules
  {
    id: '10',
    name: 'Développé militaire',
    muscle: 'epaules',
    difficulty: 'Intermédiaire',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour développer les épaules en position debout.'
  },

  // Fessiers
  {
    id: '11',
    name: 'Hip thrust',
    muscle: 'fessiers',
    difficulty: 'Intermédiaire',
    equipment: 'Barre et banc',
    description: 'Exercice ciblé pour les fessiers en position couchée.'
  },

  // Abdominaux
  {
    id: '12',
    name: 'Crunchs',
    muscle: 'abdos',
    difficulty: 'Débutant',
    equipment: 'Aucun',
    description: 'Exercice de base pour les abdominaux.'
  },

  // Dos
  {
    id: '13',
    name: 'Tractions',
    muscle: 'dos',
    difficulty: 'Avancé',
    equipment: 'Barre de traction',
    description: 'Exercice complet pour le dos.'
  },

  // Trapèzes
  {
    id: '14',
    name: 'Haussement d\'épaules',
    muscle: 'trapezes',
    difficulty: 'Débutant',
    equipment: 'Haltères ou barre',
    description: 'Exercice pour développer les trapèzes.'
  },

  // Lombaires
  {
    id: '15',
    name: 'Extensions du dos',
    muscle: 'lombaires',
    difficulty: 'Débutant',
    equipment: 'Machine à extensions du dos',
    description: 'Exercice pour renforcer les muscles lombaires.'
  },

  // Triceps
  {
    id: '16',
    name: 'Extensions des triceps',
    muscle: 'triceps',
    difficulty: 'Débutant',
    equipment: 'Câble ou haltère',
    description: 'Exercice d\'isolation pour les triceps.'
  },

  // Obliques
  {
    id: '17',
    name: 'Russian twist',
    muscle: 'obliques',
    difficulty: 'Intermédiaire',
    equipment: 'Haltère ou poids',
    description: 'Exercice pour les muscles obliques de l\'abdomen.'
  },

  // Avant-bras
  {
    id: '18',
    name: 'Curl des poignets',
    muscle: 'avant-bras',
    difficulty: 'Débutant',
    equipment: 'Barre ou haltères',
    description: 'Exercice pour renforcer les avant-bras.'
  }
]; 