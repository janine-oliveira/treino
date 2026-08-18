const exercises = [
  {
    id: "glute_bridge",
    name: "Ponte de glúteo",
    englishName: "Glute Bridge",
    category: "glutes",
    primaryMuscle: "Glúteo máximo",
    secondaryMuscles: ["Posteriores", "Core"],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "muito baixo",
    videoUrl: "https://www.youtube.com/watch?v=R1OXPHRqehw",
    embedUrl: "https://www.youtube.com/embed/R1OXPHRqehw",
    defaultSets: 3,
    defaultReps: 12,
    instructions: [
      "Deite de costas com os joelhos flexionados e os pés apoiados.",
      "Contraia o abdômen suavemente e empurre o chão com os pés.",
      "Eleve o quadril até formar uma linha confortável entre tronco e coxas.",
      "Contraia os glúteos no topo sem exagerar na extensão da lombar."
    ],
    commonMistakes: [
      "Arquear excessivamente a lombar.",
      "Empurrar mais com a ponta dos pés do que com o pé inteiro.",
      "Acelerar o movimento e perder o controle."
    ],
    kneeNotes: "Mantenha os pés estáveis e escolha uma posição confortável para os joelhos.",
    backNotes: "O movimento deve vir principalmente do quadril; evite hiperestender a lombar."
  },
  {
    id: "single_leg_glute_bridge",
    name: "Ponte unilateral",
    englishName: "Single Leg Glute Bridge",
    category: "glutes",
    primaryMuscle: "Glúteo máximo",
    secondaryMuscles: ["Posteriores", "Core", "Estabilizadores da pelve"],
    level: "intermediário",
    equipment: "Peso corporal",
    impact: "muito baixo",
    videoUrl: "https://www.youtube.com/watch?v=5M7uN6lLqkI",
    embedUrl: "https://www.youtube.com/embed/5M7uN6lLqkI",
    defaultSets: 3,
    defaultReps: 8,
    instructions: [
      "Comece dominando a ponte bilateral.",
      "Eleve uma perna mantendo a pelve estável.",
      "Empurre o chão com a perna apoiada e eleve o quadril.",
      "Desça lentamente e repita."
    ],
    commonMistakes: [
      "Girar a pelve para compensar.",
      "Perder a posição do tronco.",
      "Fazer amplitude maior do que consegue controlar."
    ],
    kneeNotes: "Use uma flexão de joelho confortável e não force a posição.",
    backNotes: "Priorize controle da pelve e não altura máxima do quadril."
  },
  {
    id: "fire_hydrant",
    name: "Fire Hydrant",
    englishName: "Fire Hydrant",
    category: "glutes",
    primaryMuscle: "Glúteo médio/abdutores",
    secondaryMuscles: ["Core"],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "muito baixo",
    videoUrl: "https://www.youtube.com/watch?v=1sFQJ8tK4Qw",
    embedUrl: "https://www.youtube.com/embed/1sFQJ8tK4Qw",
    defaultSets: 3,
    defaultReps: 12,
    instructions: [
      "Fique em quatro apoios, mãos sob os ombros e joelhos sob o quadril.",
      "Mantenha o tronco estável.",
      "Eleve um joelho lateralmente sem girar o corpo.",
      "Retorne lentamente."
    ],
    commonMistakes: [
      "Girar a pelve para elevar mais a perna.",
      "Arquear a lombar.",
      "Usar impulso."
    ],
    kneeNotes: "Use uma superfície confortável sob os joelhos.",
    backNotes: "Mantenha a coluna neutra e o abdômen levemente ativo."
  },
  {
    id: "side_lying_abduction",
    name: "Abdução lateral",
    englishName: "Side-Lying Hip Abduction",
    category: "glutes",
    primaryMuscle: "Glúteo médio",
    secondaryMuscles: ["Abdutores do quadril"],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "muito baixo",
    videoUrl: "https://www.youtube.com/watch?v=Q7X7s4qWq4E",
    embedUrl: "https://www.youtube.com/embed/Q7X7s4qWq4E",
    defaultSets: 3,
    defaultReps: 12,
    instructions: [
      "Deite de lado com o corpo alinhado.",
      "Mantenha a perna de cima estendida.",
      "Eleve a perna sem girar o quadril para trás.",
      "Desça de forma controlada."
    ],
    commonMistakes: [
      "Rodar a ponta do pé para cima.",
      "Elevar a perna alto demais.",
      "Inclinar o tronco para compensar."
    ],
    kneeNotes: "O exercício exige pouca carga sobre os joelhos.",
    backNotes: "Mantenha tronco e pelve alinhados."
  },
  {
    id: "bird_dog",
    name: "Bird Dog",
    englishName: "Bird Dog",
    category: "core",
    primaryMuscle: "Core",
    secondaryMuscles: ["Glúteos", "Estabilizadores da coluna"],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "muito baixo",
    videoUrl: "https://www.youtube.com/watch?v=xEDnlOxeJH4",
    embedUrl: "https://www.youtube.com/embed/xEDnlOxeJH4",
    defaultSets: 3,
    defaultReps: 8,
    instructions: [
      "Comece em quatro apoios.",
      "Estenda braço e perna opostos.",
      "Mantenha a pelve e o tronco estáveis.",
      "Volte lentamente e troque o lado."
    ],
    commonMistakes: [
      "Girar o quadril.",
      "Elevar demais a perna.",
      "Prender a respiração."
    ],
    kneeNotes: "Use apoio confortável sob os joelhos.",
    backNotes: "Não deixe a lombar arquear para elevar a perna."
  },
  {
    id: "plank",
    name: "Prancha",
    englishName: "Plank",
    category: "core",
    primaryMuscle: "Core",
    secondaryMuscles: ["Glúteos", "Ombros"],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "baixo",
    videoUrl: "https://www.youtube.com/watch?v=LSd0aTrVWlg",
    embedUrl: "https://www.youtube.com/embed/LSd0aTrVWlg",
    defaultSets: 3,
    defaultSeconds: 20,
    instructions: [
      "Apoie antebraços e pés, ou use joelhos para uma versão mais fácil.",
      "Mantenha cabeça, tronco e quadril alinhados.",
      "Contraia suavemente abdômen e glúteos.",
      "Respire normalmente."
    ],
    commonMistakes: [
      "Deixar o quadril cair.",
      "Elevar demais o quadril.",
      "Prender a respiração."
    ],
    kneeNotes: "A versão com joelhos apoiados pode ser usada se for mais confortável.",
    backNotes: "Interrompa antes de perder o alinhamento da lombar."
  }
];

const workoutTemplates = {
  glutesPosterior: {
    id: "glutes_posterior",
    title: "🍑 Glúteos + Posterior",
    focus: "Extensão de quadril e glúteos",
    type: "glutes",
    exercises: ["glute_bridge", "single_leg_glute_bridge", "fire_hydrant", "side_lying_abduction", "bird_dog"]
  },
  glutesLegs: {
    id: "glutes_legs",
    title: "🍑 Glúteos + Pernas",
    focus: "Glúteos e estabilidade das pernas",
    type: "glutes",
    exercises: ["glute_bridge", "fire_hydrant", "side_lying_abduction", "bird_dog", "plank"]
  },
  glutesFull: {
    id: "glutes_full",
    title: "🍑 Glúteos completo",
    focus: "Glúteos + core",
    type: "glutes",
    exercises: ["glute_bridge", "single_leg_glute_bridge", "fire_hydrant", "side_lying_abduction", "plank"]
  },
  coreMobility: {
    id: "core_mobility",
    title: "🧘 Core + Mobilidade",
    focus: "Core e estabilidade",
    type: "core",
    exercises: ["bird_dog", "plank"]
  },
  recovery: {
    id: "recovery",
    title: "😴 Recuperação ativa",
    focus: "Movimentação leve e recuperação",
    type: "recovery",
    exercises: ["bird_dog"]
  }
};
