# 🍑 Glúteo Forte

Aplicativo pessoal de acompanhamento de treino, hipertrofia e alimentação.

O projeto foi desenvolvido utilizando apenas:

- HTML5
- CSS3
- JavaScript puro
- localStorage

Não utiliza banco de dados ou servidor.

---

# 🎯 Objetivo

O objetivo do projeto é acompanhar:

- Treinos de musculação
- Evolução da consistência
- Ganho de massa muscular
- Treinos concluídos
- Whey Protein
- Creatina
- Meta diária de proteína

---

# 👤 Perfil utilizado

- Sexo: Feminino
- Idade: 32 anos
- Altura: 1,65 m
- Peso atual: 53 kg
- Meta inicial: 60 kg
- Objetivo: Hipertrofia e ganho de massa muscular

---

# 🏋️ Estrutura de treino

O aplicativo trabalha inicialmente com 3 treinos.

## Treino A

### 🍑 Glúteos + Posterior

Foco:

- Glúteo máximo
- Posteriores da coxa
- Glúteo médio

Principais exercícios:

- Hip Thrust
- Mesa Flexora
- Stiff / Levantamento Romeno
- Abdutora
- Panturrilha

---

## Treino B

### 🍑 Glúteos + Quadríceps

Foco:

- Glúteos
- Quadríceps
- Estabilidade

Principais exercícios:

- Leg Press
- Agachamento no Smith
- Cadeira Extensora
- Abdutora
- Core

---

## Treino C

### 💪 Superiores Completo

Foco:

- Costas
- Peito
- Ombros
- Bíceps
- Tríceps

Principais exercícios:

- Puxada Frontal
- Remada Máquina
- Supino Máquina
- Desenvolvimento de Ombros
- Rosca Bíceps
- Tríceps Polia

---

# 📅 Dias de treino

O sistema não exige dias fixos da semana.

Você pode organizar os treinos de acordo com sua rotina.

Exemplo:

- Segunda → Treino A
- Quarta → Treino B
- Sexta → Treino C

Ou:

- Terça → Treino A
- Quinta → Treino B
- Sábado → Treino C

O aplicativo organiza automaticamente o próximo treino na sequência:

A → B → C → A

---

# 🍽️ Alimentação

O aplicativo utiliza uma abordagem simples e não restritiva.

Meta inicial:

## Aproximadamente 100 g de proteína por dia

O site inclui sugestões utilizando alimentos disponíveis como:

- Ovos
- Frango
- Carne de porco
- Moela
- Leite
- Whey Protein
- Fígado

O macarrão continua permitido dentro da alimentação.

---

# 💾 Dados

Os dados são armazenados utilizando:

## localStorage

Isso significa:

- Não existe login
- Não existe banco de dados
- Não existem servidores
- Os dados ficam armazenados no navegador

São salvos:

- Histórico de treinos
- Whey
- Creatina
- Meta diária de proteína
- Tema claro ou escuro

---

# 📁 Estrutura

```text
treino/
│
├── index.html
├── style.css
├── script.js
└── README.md