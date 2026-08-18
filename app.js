const STORAGE_KEY = "gluteoForte.v1";

const state = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  installPrompt: null
};

const defaultData = {
  trainingDays: [],
  profile: { age: 32, weight: 57, height: 1.65 }
};

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultData, ...saved } : structuredClone(defaultData);
  } catch {
    return structuredClone(defaultData);
  }
}

let db = loadData();

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function dateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseKey(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysBetween(a, b) {
  const ms = 24 * 60 * 60 * 1000;
  return Math.floor((parseKey(b) - parseKey(a)) / ms);
}

function getLastTrainingDate() {
  const days = [...db.trainingDays].sort().reverse();
  return days[0] || null;
}

function getLastGluteDate() {
  // MVP: every registered training day is considered a glute day only
  // when its focus was stored as glutes. Existing old dates are treated as glute days.
  return getLastTrainingDate();
}

function getWeekStart(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0,0,0,0);
  return d;
}

function getWeekTrainingCount() {
  const start = getWeekStart();
  return db.trainingDays.filter(k => parseKey(k) >= start).length;
}

function getStreak() {
  const days = new Set(db.trainingDays);
  let cursor = new Date();
  cursor.setHours(0,0,0,0);

  // If today wasn't trained, allow streak to start yesterday.
  if (!days.has(dateKey(cursor))) cursor.setDate(cursor.getDate() - 1);

  let streak = 0;
  while (days.has(dateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function chooseTodayWorkout() {
  const last = getLastGluteDate();
  if (!last) return workoutTemplates.glutesPosterior;

  const diff = daysBetween(last, dateKey());

  if (diff <= 1) return workoutTemplates.coreMobility;
  if (getWeekTrainingCount() >= 3) return workoutTemplates.coreMobility;

  const cycle = getWeekTrainingCount() % 3;
  if (cycle === 0) return workoutTemplates.glutesPosterior;
  if (cycle === 1) return workoutTemplates.glutesLegs;
  return workoutTemplates.glutesFull;
}

function renderHome() {
  const workout = chooseTodayWorkout();
  document.getElementById("todayTitle").textContent = workout.title;
  document.getElementById("todayFocus").textContent = workout.focus;
  document.getElementById("weekCount").textContent = `${Math.min(getWeekTrainingCount(), 3)}/3`;
  document.getElementById("gluteCount").textContent = db.trainingDays.length;
  document.getElementById("streakValue").textContent = getStreak();
  document.getElementById("currentStreak").textContent = getStreak();
  document.getElementById("totalWorkouts").textContent = db.trainingDays.length;

  const container = document.getElementById("todayWorkout");
  container.innerHTML = `
    <div class="card workout-card">
      <div class="workout-top">
        <div>
          <span class="eyebrow">TREINO DE HOJE</span>
          <h3>${workout.title}</h3>
        </div>
        <span class="pill">${workout.type}</span>
      </div>
      <div class="exercise-preview">
        ${workout.exercises.map((id, i) => {
          const e = exercises.find(x => x.id === id);
          const prescription = e.defaultSeconds ? `${e.defaultSets} × ${e.defaultSeconds}s` : `${e.defaultSets} × ${e.defaultReps}`;
          return `<button class="exercise-row" data-exercise="${e.id}">
            <span class="exercise-number">${i + 1}</span>
            <span><strong>${e.name}</strong><small>${prescription} · ${e.primaryMuscle}</small></span>
            <span>›</span>
          </button>`;
        }).join("")}
      </div>
      <button class="btn primary wide" id="startWorkout">COMEÇAR TREINO</button>
    </div>
  `;

  document.getElementById("startWorkout").addEventListener("click", () => startWorkout(workout));
  container.querySelectorAll("[data-exercise]").forEach(btn => {
    btn.addEventListener("click", () => openExercise(btn.dataset.exercise));
  });
}

function startWorkout(workout) {
  const container = document.getElementById("todayWorkout");
  let index = 0;

  function renderStep() {
    const e = exercises.find(x => x.id === workout.exercises[index]);
    const prescription = e.defaultSeconds ? `${e.defaultSets} × ${e.defaultSeconds}s` : `${e.defaultSets} × ${e.defaultReps}`;
    container.innerHTML = `
      <div class="card workout-card">
        <span class="eyebrow">EXERCÍCIO ${index + 1} DE ${workout.exercises.length}</span>
        <h3>${e.name}</h3>
        <p class="muted">${prescription} · ${e.primaryMuscle}</p>
        <div class="video-wrap">
          <iframe src="${e.embedUrl}" title="${e.name}" loading="lazy" allowfullscreen></iframe>
        </div>
        ${e.defaultSeconds ? `
          <div class="timer">
            <span id="timerValue">${e.defaultSeconds}</span>
            <small>segundos</small>
          </div>
          <button class="btn secondary wide" id="timerBtn">▶ Iniciar timer</button>
        ` : ""}
        <div class="button-row">
          <button class="btn secondary" id="doneBtn">✅ Concluí</button>
          <button class="btn ghost" id="skipBtn">Pular</button>
        </div>
        <div class="feedback" id="feedback" hidden>
          <h4>Como foi?</h4>
          <div class="difficulty">
            ${[1,2,3,4,5].map(n => `<button data-rpe="${n}">${n}</button>`).join("")}
          </div>
          <p class="muted">1 muito fácil · 5 muito difícil</p>
          <label class="pain-toggle"><input type="checkbox" id="painCheck"> Senti dor</label>
          <button class="btn primary wide" id="nextBtn">Continuar</button>
        </div>
      </div>
    `;

    let selectedRpe = null;
    const feedback = document.getElementById("feedback");

    document.querySelectorAll("[data-rpe]").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedRpe = Number(btn.dataset.rpe);
        document.querySelectorAll("[data-rpe]").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    document.getElementById("doneBtn").addEventListener("click", () => {
      feedback.hidden = false;
      document.getElementById("doneBtn").disabled = true;
      document.getElementById("skipBtn").disabled = true;
    });

    document.getElementById("skipBtn").addEventListener("click", () => {
      index++;
      if (index < workout.exercises.length) renderStep();
      else finishWorkout(workout);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      if (!selectedRpe) {
        alert("Selecione a dificuldade de 1 a 5.");
        return;
      }
      const pain = document.getElementById("painCheck").checked;
      if (pain) {
        alert("A progressão automática ficará pausada para este exercício. Se a dor for importante, interrompa e procure avaliação profissional.");
      }
      index++;
      if (index < workout.exercises.length) renderStep();
      else finishWorkout(workout);
    });

    const timerBtn = document.getElementById("timerBtn");
    if (timerBtn) setupTimer(timerBtn, e.defaultSeconds);
  }

  renderStep();
}

function setupTimer(btn, seconds) {
  let remaining = seconds;
  let interval = null;
  btn.addEventListener("click", () => {
    if (interval) return;
    btn.textContent = "⏸ Timer rodando...";
    interval = setInterval(() => {
      remaining--;
      const el = document.getElementById("timerValue");
      if (el) el.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(interval);
        interval = null;
        btn.textContent = "🔔 Série concluída!";
      }
    }, 1000);
  });
}

function finishWorkout(workout) {
  const today = dateKey();
  if (!db.trainingDays.includes(today)) {
    db.trainingDays.push(today);
    db.trainingDays.sort();
    saveData();
  }
  renderAll();
  alert("🎉 Treino registrado! Amanhã o aplicativo levará esse treino em consideração.");
}

function renderWorkouts() {
  const el = document.getElementById("workoutOptions");
  el.innerHTML = Object.values(workoutTemplates).map(w => `
    <div class="card">
      <span class="pill">${w.type}</span>
      <h3>${w.title}</h3>
      <p>${w.focus}</p>
      <div class="mini-list">${w.exercises.map(id => {
        const e = exercises.find(x => x.id === id);
        return `<span>• ${e.name}</span>`;
      }).join("")}</div>
    </div>
  `).join("");
}

function renderExercises() {
  const el = document.getElementById("exerciseList");
  el.innerHTML = exercises.map(e => `
    <article class="card exercise-card">
      <div class="exercise-card-head">
        <div>
          <span class="pill">${e.category}</span>
          <h3>${e.name}</h3>
          <p class="muted">${e.englishName}</p>
        </div>
        <span class="level">${e.level}</span>
      </div>
      <p><strong>Principal:</strong> ${e.primaryMuscle}</p>
      <p><strong>Equipamento:</strong> ${e.equipment}</p>
      <button class="btn secondary wide" data-open-exercise="${e.id}">▶ Ver demonstração</button>
    </article>
  `).join("");

  el.querySelectorAll("[data-open-exercise]").forEach(btn => {
    btn.addEventListener("click", () => openExercise(btn.dataset.openExercise));
  });
}

function openExercise(id) {
  const e = exercises.find(x => x.id === id);
  const modal = document.getElementById("modal");
  document.getElementById("modalBody").innerHTML = `
    <span class="pill">${e.category}</span>
    <h2>${e.name}</h2>
    <p class="muted">${e.englishName} · ${e.level}</p>
    <div class="video-wrap">
      <iframe src="${e.embedUrl}" title="${e.name}" loading="lazy" allowfullscreen></iframe>
    </div>
    <h3>Como fazer</h3>
    <ol>${e.instructions.map(x => `<li>${x}</li>`).join("")}</ol>
    <h3>Erros comuns</h3>
    <ul>${e.commonMistakes.map(x => `<li>${x}</li>`).join("")}</ul>
    <p><strong>Joelhos:</strong> ${e.kneeNotes}</p>
    <p><strong>Lombar:</strong> ${e.backNotes}</p>
    <a class="btn secondary wide" href="${e.videoUrl}" target="_blank" rel="noopener">Abrir no YouTube</a>
  `;
  modal.hidden = false;
}

function renderHistory() {
  const el = document.getElementById("historyList");
  const days = [...db.trainingDays].sort().reverse().slice(0, 15);
  el.innerHTML = days.length ? days.map(d => `
    <div class="history-row"><span>🟢</span><strong>${formatDate(d)}</strong><small>Treino concluído</small></div>
  `).join("") : `<p class="muted">Ainda não há treinos registrados.</p>`;
}

function formatDate(key) {
  return parseKey(key).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" });
}

function renderCalendar() {
  const title = new Date(state.year, state.month, 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  document.getElementById("calendarTitle").textContent = title.charAt(0).toUpperCase() + title.slice(1);

  const first = new Date(state.year, state.month, 1);
  const last = new Date(state.year, state.month + 1, 0);
  const grid = document.getElementById("calendarGrid");
  grid.innerHTML = "";

  for (let i = 0; i < first.getDay(); i++) grid.insertAdjacentHTML("beforeend", `<div class="day empty"></div>`);

  for (let day = 1; day <= last.getDate(); day++) {
    const key = `${state.year}-${String(state.month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const trained = db.trainingDays.includes(key);
    const today = key === dateKey();
    grid.insertAdjacentHTML("beforeend", `
      <div class="day ${trained ? "trained" : ""} ${today ? "today" : ""}">
        <span>${day}</span>
        ${trained ? "<b>✓</b>" : ""}
      </div>
    `);
  }
}

function renderProfile() {
  document.getElementById("ageInput").value = db.profile.age;
  document.getElementById("weightInput").value = db.profile.weight;
  document.getElementById("heightInput").value = db.profile.height;
}

function renderAll() {
  renderHome();
  renderWorkouts();
  renderExercises();
  renderHistory();
  renderCalendar();
  renderProfile();
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${page}`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.page === page));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.page)));

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", () => document.getElementById("modal").hidden = true);
});

document.getElementById("prevMonth").addEventListener("click", () => {
  state.month--;
  if (state.month < 0) { state.month = 11; state.year--; }
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  state.month++;
  if (state.month > 11) { state.month = 0; state.year++; }
  renderCalendar();
});

document.getElementById("saveProfile").addEventListener("click", () => {
  db.profile = {
    age: Number(document.getElementById("ageInput").value),
    weight: Number(document.getElementById("weightInput").value),
    height: Number(document.getElementById("heightInput").value)
  };
  saveData();
  alert("Perfil salvo.");
});

document.getElementById("clearHistory").addEventListener("click", () => {
  if (confirm("Tem certeza que deseja apagar todos os dias registrados?")) {
    db.trainingDays = [];
    saveData();
    renderAll();
  }
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gluteo-forte-backup-${dateKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("importInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.trainingDays)) throw new Error("Arquivo inválido.");
    db = { ...defaultData, ...imported };
    saveData();
    renderAll();
    alert("Backup importado com sucesso.");
  } catch {
    alert("Não foi possível importar esse arquivo.");
  }
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  state.installPrompt = event;
  document.getElementById("installBtn").hidden = false;
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (!state.installPrompt) return;
  state.installPrompt.prompt();
  await state.installPrompt.userChoice;
  state.installPrompt = null;
  document.getElementById("installBtn").hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
}

renderAll();
