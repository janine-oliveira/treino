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

    kneeNotes:
      "Mantenha os pés estáveis e escolha uma posição confortável para os joelhos.",

    backNotes:
      "O movimento deve vir principalmente do quadril; evite hiperestender a lombar."
  },

  {
    id: "single_leg_glute_bridge",
    name: "Ponte unilateral",
    englishName: "Single Leg Glute Bridge",
    category: "glutes",
    primaryMuscle: "Glúteo máximo",
    secondaryMuscles: [
      "Posteriores",
      "Core",
      "Estabilizadores da pelve"
    ],
    level: "intermediário",
    equipment: "Peso corporal",
    impact: "muito baixo",

    videoUrl: "https://www.youtube.com/watch?v=sVfp4LN9niA",
    embedUrl: "https://www.youtube.com/embed/sVfp4LN9niA",

    defaultSets: 3,
    defaultReps: 8,

    instructions: [
      "Comece dominando a ponte bilateral.",
      "Deite de costas e mantenha uma perna apoiada no chão.",
      "Eleve a outra perna mantendo a pelve estável.",
      "Empurre o chão com o pé apoiado e eleve o quadril.",
      "Contraia o glúteo no topo.",
      "Desça lentamente e repita.",
      "Faça o mesmo número de repetições para cada lado."
    ],

    commonMistakes: [
      "Girar a pelve para compensar.",
      "Deixar um lado do quadril cair.",
      "Arquear excessivamente a lombar.",
      "Fazer o movimento rápido demais.",
      "Tentar subir mais alto do que consegue controlar."
    ],

    kneeNotes:
      "Use uma flexão de joelho confortável. Se houver desconforto no joelho, reduza a amplitude ou volte para a ponte bilateral.",

    backNotes:
      "Priorize o controle da pelve. Não tente alcançar a maior altura possível se isso fizer a lombar compensar."
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

    videoUrl:
      "https://www.youtube.com/watch?v=hjMEwbXhya4",

    embedUrl:
      "https://www.youtube.com/embed/hjMEwbXhya4",

    defaultSets: 3,
    defaultReps: 12,

    instructions: [
      "Fique em quatro apoios, com as mãos sob os ombros e os joelhos sob o quadril.",
      "Mantenha o tronco estável.",
      "Eleve um joelho lateralmente.",
      "Evite girar o quadril para conseguir levantar mais a perna.",
      "Retorne lentamente à posição inicial.",
      "Faça o mesmo número de repetições para cada lado."
    ],

    commonMistakes: [
      "Girar a pelve para elevar mais a perna.",
      "Arquear a lombar.",
      "Usar impulso.",
      "Levantar o joelho excessivamente.",
      "Perder o apoio dos braços."
    ],

    kneeNotes:
      "Use uma superfície confortável sob os joelhos, como um tapete de exercícios.",

    backNotes:
      "Mantenha a coluna neutra e o abdômen levemente ativo. O movimento deve acontecer principalmente no quadril."
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

    videoUrl:
      "https://www.youtube.com/watch?v=mxWissvKVj0",

    embedUrl:
      "https://www.youtube.com/embed/mxWissvKVj0",

    defaultSets: 3,
    defaultReps: 12,

    instructions: [
      "Deite de lado com o corpo alinhado.",
      "Mantenha os quadris empilhados, sem deixar o quadril de cima girar para trás.",
      "Mantenha a perna de cima estendida.",
      "Mantenha o pé apontado para frente.",
      "Eleve a perna lentamente.",
      "Desça de forma controlada.",
      "Faça o mesmo número de repetições para cada lado."
    ],

    commonMistakes: [
      "Rodar a ponta do pé para cima.",
      "Elevar a perna alto demais.",
      "Inclinar o tronco para compensar.",
      "Girar o quadril para trás.",
      "Fazer o movimento rapidamente."
    ],

    kneeNotes:
      "O exercício exige pouca carga sobre os joelhos. Mantenha a perna estendida sem travar o joelho.",

    backNotes:
      "Mantenha tronco e pelve alinhados. Evite compensar inclinando o corpo."
  },

  {
    id: "bird_dog",
    name: "Bird Dog",
    englishName: "Bird Dog",
    category: "core",
    primaryMuscle: "Core",
    secondaryMuscles: [
      "Glúteos",
      "Estabilizadores da coluna"
    ],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "muito baixo",

    videoUrl:
      "https://www.youtube.com/watch?v=xEDnlOxeJH4",

    embedUrl:
      "https://www.youtube.com/embed/xEDnlOxeJH4",

    defaultSets: 3,
    defaultReps: 8,

    instructions: [
      "Comece em quatro apoios.",
      "Estenda braço e perna opostos.",
      "Mantenha a pelve e o tronco estáveis.",
      "Segure brevemente a posição.",
      "Volte lentamente e troque o lado."
    ],

    commonMistakes: [
      "Girar o quadril.",
      "Elevar demais a perna.",
      "Arquear a lombar.",
      "Prender a respiração.",
      "Fazer o movimento rapidamente."
    ],

    kneeNotes:
      "Use apoio confortável sob os joelhos.",

    backNotes:
      "Não deixe a lombar arquear para elevar a perna. Priorize estabilidade."
  },

  {
    id: "plank",
    name: "Prancha",
    englishName: "Plank",
    category: "core",
    primaryMuscle: "Core",
    secondaryMuscles: [
      "Glúteos",
      "Ombros"
    ],
    level: "iniciante",
    equipment: "Peso corporal",
    impact: "baixo",

    videoUrl:
      "https://www.youtube.com/watch?v=LSd0aTrVWlg",

    embedUrl:
      "https://www.youtube.com/embed/LSd0aTrVWlg",

    defaultSets: 3,
    defaultSeconds: 20,

    instructions: [
      "Apoie antebraços e pés, ou use joelhos para uma versão mais fácil.",
      "Mantenha cabeça, tronco e quadril alinhados.",
      "Contraia suavemente abdômen e glúteos.",
      "Respire normalmente.",
      "Mantenha a posição apenas enquanto conseguir preservar a técnica."
    ],

    commonMistakes: [
      "Deixar o quadril cair.",
      "Elevar demais o quadril.",
      "Prender a respiração.",
      "Forçar a lombar.",
      "Manter a posição mesmo depois de perder a técnica."
    ],

    kneeNotes:
      "A versão com joelhos apoiados pode ser usada se for mais confortável.",

    backNotes:
      "Interrompa antes de perder o alinhamento da lombar."
  }
];


const workoutTemplates = {

  glutesPosterior: {
    id: "glutes_posterior",
    title: "🍑 Glúteos + Posterior",
    focus: "Extensão de quadril e glúteos",
    type: "glutes",

    exercises: [
      "glute_bridge",
      "single_leg_glute_bridge",
      "fire_hydrant",
      "side_lying_abduction",
      "bird_dog"
    ]
  },

  glutesLegs: {
    id: "glutes_legs",
    title: "🍑 Glúteos + Pernas",
    focus: "Glúteos e estabilidade das pernas",
    type: "glutes",

    exercises: [
      "glute_bridge",
      "fire_hydrant",
      "side_lying_abduction",
      "bird_dog",
      "plank"
    ]
  },

  glutesFull: {
    id: "glutes_full",
    title: "🍑 Glúteos completo",
    focus: "Glúteos + core",
    type: "glutes",

    exercises: [
      "glute_bridge",
      "single_leg_glute_bridge",
      "fire_hydrant",
      "side_lying_abduction",
      "plank"
    ]
  },

  coreMobility: {
    id: "core_mobility",
    title: "🧘 Core + Mobilidade",
    focus: "Core e estabilidade",
    type: "core",

    exercises: [
      "bird_dog",
      "plank"
    ]
  },

  recovery: {
    id: "recovery",
    title: "😴 Recuperação ativa",
    focus: "Movimentação leve e recuperação",
    type: "recovery",

    exercises: [
      "bird_dog"
    ]
  }
};
