/* =========================================
   GLÚTEO FORTE
   SCRIPT PRINCIPAL
========================================= */


/* =========================================
   TREINOS
========================================= */

const workouts = [

    {
        id: "A",

        title: "🍑 Glúteos + Posterior",

        focus:
            "Glúteo máximo e posteriores",

        type:
            "Inferiores",

        exercises: [

            {
                name:
                    "Hip Thrust",

                muscle:
                    "Glúteo máximo",

                sets:
                    "4 × 8–12"
            },

            {
                name:
                    "Mesa Flexora",

                muscle:
                    "Posteriores",

                sets:
                    "3 × 10–12"
            },

            {
                name:
                    "Stiff / Levantamento Romeno",

                muscle:
                    "Posteriores + Glúteos",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Abdutora",

                muscle:
                    "Glúteo médio",

                sets:
                    "3 × 12–15"
            },

            {
                name:
                    "Panturrilha",

                muscle:
                    "Panturrilhas",

                sets:
                    "3 × 12–15"
            }

        ]

    },


    {
        id: "B",

        title:
            "🍑 Glúteos + Quadríceps",

        focus:
            "Glúteos, quadríceps e estabilidade",

        type:
            "Inferiores",

        exercises: [

            {
                name:
                    "Leg Press",

                muscle:
                    "Quadríceps + Glúteos",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Agachamento no Smith",

                muscle:
                    "Glúteos + Quadríceps",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Cadeira Extensora",

                muscle:
                    "Quadríceps",

                sets:
                    "3 × 10–15"
            },

            {
                name:
                    "Abdutora",

                muscle:
                    "Glúteo médio",

                sets:
                    "3 × 12–20"
            },

            {
                name:
                    "Core",

                muscle:
                    "Estabilidade",

                sets:
                    "3 séries"
            }

        ]

    },


    {
        id: "C",

        title:
            "💪 Superiores Completo",

        focus:
            "Costas, peito, ombros e braços",

        type:
            "Superiores",

        exercises: [

            {
                name:
                    "Puxada Frontal",

                muscle:
                    "Costas",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Remada Máquina",

                muscle:
                    "Costas",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Supino Máquina",

                muscle:
                    "Peito",

                sets:
                    "3 × 8–12"
            },

            {
                name:
                    "Desenvolvimento de Ombros",

                muscle:
                    "Ombros",

                sets:
                    "3 × 10–12"
            },

            {
                name:
                    "Rosca Bíceps",

                muscle:
                    "Bíceps",

                sets:
                    "3 × 10–12"
            },

            {
                name:
                    "Tríceps Polia",

                muscle:
                    "Tríceps",

                sets:
                    "3 × 10–12"
            }

        ]

    }

];


/* =========================================
   LOCAL STORAGE
========================================= */

const STORAGE_KEYS = {

    workouts:
        "gluteoForteWorkouts",

    supplements:
        "gluteoForteSupplements",

    theme:
        "gluteoForteTheme"

};


/* =========================================
   ESTADO
========================================= */

let selectedWorkout = null;


/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);


function initializeApp() {

    initializeNavigation();

    initializeTheme();

    initializeSupplements();

    initializeWorkoutButtons();

    initializeModal();

    initializeResetButton();

    updateDashboard();

    updateProgressPage();

}


/* =========================================
   NAVEGAÇÃO
========================================= */

function initializeNavigation() {

    const navButtons =
        document.querySelectorAll(".nav-button");


    navButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const pageId =
                    button.dataset.page;


                document
                    .querySelectorAll(".page")
                    .forEach(page => {

                        page.classList.remove(
                            "active-page"
                        );

                    });


                document
                    .querySelectorAll(".nav-button")
                    .forEach(navButton => {

                        navButton.classList.remove(
                            "active"
                        );

                    });


                const selectedPage =
                    document.getElementById(
                        pageId
                    );


                if (selectedPage) {

                    selectedPage.classList.add(
                        "active-page"
                    );

                }


                button.classList.add(
                    "active"
                );


                window.scrollTo({

                    top: 0,

                    behavior:
                        "smooth"

                });

            }
        );

    });

}


/* =========================================
   TREINOS SALVOS
========================================= */

function getWorkoutHistory() {

    const savedHistory =
        localStorage.getItem(
            STORAGE_KEYS.workouts
        );


    if (!savedHistory) {

        return [];

    }


    try {

        return JSON.parse(
            savedHistory
        );

    }

    catch (error) {

        console.error(
            "Erro ao carregar histórico:",
            error
        );

        return [];

    }

}


function saveWorkoutHistory(history) {

    localStorage.setItem(

        STORAGE_KEYS.workouts,

        JSON.stringify(history)

    );

}


/* =========================================
   PRÓXIMO TREINO
========================================= */

function getNextWorkout() {

    const history =
        getWorkoutHistory();


    if (history.length === 0) {

        return workouts[0];

    }


    const lastWorkout =
        history[history.length - 1];


    const currentIndex =
        workouts.findIndex(

            workout =>

                workout.id ===
                lastWorkout.workoutId

        );


    const nextIndex =
        (currentIndex + 1) %
        workouts.length;


    return workouts[nextIndex];

}


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

    const nextWorkout =
        getNextWorkout();


    document.getElementById(
        "todayWorkoutTitle"
    ).textContent =
        nextWorkout.title;


    document.getElementById(
        "todayWorkoutFocus"
    ).textContent =
        nextWorkout.focus;


    document.getElementById(
        "todayWorkoutExercises"
    ).textContent =
        nextWorkout.exercises.length +
        " exercícios";


    const history =
        getWorkoutHistory();


    document.getElementById(
        "completedWorkouts"
    ).textContent =
        history.length;


    document.getElementById(
        "currentStreak"
    ).textContent =
        calculateStreak();


    updateWorkoutStatus();

}


/* =========================================
   STATUS DO TREINO
========================================= */

function updateWorkoutStatus() {

    const statusElement =
        document.getElementById(
            "workoutStatus"
        );


    if (!statusElement) {

        return;

    }


    statusElement.textContent =
        "Próximo treino";

}


/* =========================================
   BOTÃO INICIAR TREINO
========================================= */

function initializeWorkoutButtons() {

    const startButton =
        document.getElementById(
            "startWorkoutButton"
        );


    if (!startButton) {

        return;

    }


    startButton.addEventListener(
        "click",
        () => {

            openWorkoutModal();

        }
    );

}


/* =========================================
   MODAL
========================================= */

function initializeModal() {

    const closeButton =
        document.getElementById(
            "closeModalButton"
        );


    const modal =
        document.getElementById(
            "workoutModal"
        );


    closeButton.addEventListener(
        "click",
        closeWorkoutModal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeWorkoutModal();

            }

        }
    );


    const completeButton =
        document.getElementById(
            "completeWorkoutButton"
        );


    completeButton.addEventListener(
        "click",
        completeCurrentWorkout
    );

}


function openWorkoutModal() {

    selectedWorkout =
        getNextWorkout();


    const modal =
        document.getElementById(
            "workoutModal"
        );


    const title =
        document.getElementById(
            "modalWorkoutTitle"
        );


    const content =
        document.getElementById(
            "modalWorkoutContent"
        );


    title.textContent =
        selectedWorkout.title;


    content.innerHTML =
        "";


    selectedWorkout.exercises.forEach(
        exercise => {

            const exerciseElement =
                document.createElement(
                    "div"
                );


            exerciseElement.className =
                "modal-exercise";


            exerciseElement.innerHTML = `

                <strong>
                    ${exercise.name}
                </strong>

                <p>
                    ${exercise.muscle}
                </p>

                <p>
                    ${exercise.sets}
                </p>

            `;


            content.appendChild(
                exerciseElement
            );

        }
    );


    modal.classList.add(
        "show"
    );

}


function closeWorkoutModal() {

    const modal =
        document.getElementById(
            "workoutModal"
        );


    modal.classList.remove(
        "show"
    );

}


/* =========================================
   CONCLUIR TREINO
========================================= */

function completeCurrentWorkout() {

    if (!selectedWorkout) {

        return;

    }


    const history =
        getWorkoutHistory();


    const workoutRecord = {

        id:
            Date.now(),

        workoutId:
            selectedWorkout.id,

        title:
            selectedWorkout.title,

        date:
            new Date().toISOString(),

        completed:
            true

    };


    history.push(
        workoutRecord
    );


    saveWorkoutHistory(
        history
    );


    closeWorkoutModal();


    updateDashboard();

    updateProgressPage();


    alert(
        "🎉 Treino concluído com sucesso!\n\nO próximo treino já foi organizado."
    );


    selectedWorkout =
        null;

}


/* =========================================
   SEQUÊNCIA
========================================= */

function calculateStreak() {

    const history =
        getWorkoutHistory();


    if (
        history.length === 0
    ) {

        return 0;

    }


    const dates = [

        ...new Set(

            history.map(

                workout =>

                    formatDateKey(
                        new Date(
                            workout.date
                        )
                    )

            )

        )

    ].sort().reverse();


    let streak = 1;


    let currentDate =
        new Date(
            dates[0]
        );


    for (

        let i = 1;

        i < dates.length;

        i++

    ) {

        const previousDate =
            new Date(
                dates[i]
            );


        const difference =
            Math.round(

                (
                    currentDate -
                    previousDate
                )

                /

                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            );


        if (
            difference === 1
        ) {

            streak++;

            currentDate =
                previousDate;

        }

        else {

            break;

        }

    }


    return streak;

}


function formatDateKey(date) {

    const year =
        date.getFullYear();


    const month =
        String(

            date.getMonth() + 1

        ).padStart(
            2,
            "0"
        );


    const day =
        String(

            date.getDate()

        ).padStart(
            2,
            "0"
        );


    return `${year}-${month}-${day}`;

}


/* =========================================
   PROGRESSO
========================================= */

function updateProgressPage() {

    const history =
        getWorkoutHistory();


    const totalElement =
        document.getElementById(
            "progressTotal"
        );


    const weekElement =
        document.getElementById(
            "progressThisWeek"
        );


    const streakElement =
        document.getElementById(
            "progressStreak"
        );


    if (
        totalElement
    ) {

        totalElement.textContent =
            history.length;

    }


    if (
        weekElement
    ) {

        weekElement.textContent =
            getWorkoutsThisWeek();

    }


    if (
        streakElement
    ) {

        streakElement.textContent =
            calculateStreak();

    }


    renderWorkoutHistory();

}


/* =========================================
   TREINOS DA SEMANA
========================================= */

function getWorkoutsThisWeek() {

    const history =
        getWorkoutHistory();


    const today =
        new Date();


    const startOfWeek =
        new Date(
            today
        );


    startOfWeek.setDate(

        today.getDate() -
        today.getDay()

    );


    startOfWeek.setHours(
        0,
        0,
        0,
        0
    );


    return history.filter(

        workout => {

            const workoutDate =
                new Date(
                    workout.date
                );


            return (
                workoutDate >=
                startOfWeek
            );

        }

    ).length;

}


/* =========================================
   HISTÓRICO
========================================= */

function renderWorkoutHistory() {

    const container =
        document.getElementById(
            "workoutHistory"
        );


    if (!container) {

        return;

    }


    const history =
        getWorkoutHistory()
            .slice()
            .reverse();


    container.innerHTML =
        "";


    if (
        history.length === 0
    ) {

        container.innerHTML = `

            <p class="empty-history">

                Nenhum treino registrado ainda.

            </p>

        `;

        return;

    }


    history.forEach(
        workout => {

            const date =
                new Date(
                    workout.date
                );


            const formattedDate =
                date.toLocaleDateString(

                    "pt-BR",

                    {

                        day:
                            "2-digit",

                        month:
                            "2-digit",

                        year:
                            "numeric"

                    }

                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "history-item";


            item.innerHTML = `

                <div>

                    <strong>
                        ${workout.title}
                    </strong>

                    <small>
                        Treino concluído
                    </small>

                </div>

                <strong>
                    ${formattedDate}
                </strong>

            `;


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================
   SUPLEMENTOS
========================================= */

function initializeSupplements() {

    const todayKey =
        getTodayKey();


    const supplements =
        getSupplementsData();


    if (
        !supplements[todayKey]
    ) {

        supplements[todayKey] = {

            whey:
                false,

            creatine:
                false,

            protein:
                false

        };

    }


    const todaySupplements =
        supplements[todayKey];


    document.getElementById(
        "wheyCheck"
    ).checked =
        todaySupplements.whey;


    document.getElementById(
        "creatineCheck"
    ).checked =
        todaySupplements.creatine;


    document.getElementById(
        "proteinCheck"
    ).checked =
        todaySupplements.protein;


    document.getElementById(
        "wheyCheck"
    ).addEventListener(

        "change",

        event => {

            updateSupplement(

                "whey",

                event.target.checked

            );

        }

    );


    document.getElementById(
        "creatineCheck"
    ).addEventListener(

        "change",

        event => {

            updateSupplement(

                "creatine",

                event.target.checked

            );

        }

    );


    document.getElementById(
        "proteinCheck"
    ).addEventListener(

        "change",

        event => {

            updateSupplement(

                "protein",

                event.target.checked

            );

        }

    );

}


function getSupplementsData() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.supplements
        );


    if (!saved) {

        return {};

    }


    try {

        return JSON.parse(
            saved
        );

    }

    catch {

        return {};

    }

}


function updateSupplement(

    type,

    value

) {

    const supplements =
        getSupplementsData();


    const today =
        getTodayKey();


    if (
        !supplements[today]
    ) {

        supplements[today] = {

            whey:
                false,

            creatine:
                false,

            protein:
                false

        };

    }


    supplements[today][type] =
        value;


    localStorage.setItem(

        STORAGE_KEYS.supplements,

        JSON.stringify(
            supplements
        )

    );

}


function getTodayKey() {

    return formatDateKey(
        new Date()
    );

}


/* =========================================
   TEMA
========================================= */

function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            STORAGE_KEYS.theme
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }


    updateThemeButton();


    const themeButton =
        document.getElementById(
            "themeButton"
        );


    themeButton.addEventListener(

        "click",

        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(

                STORAGE_KEYS.theme,

                isDark
                    ? "dark"
                    : "light"

            );


            updateThemeButton();

        }

    );

}


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeButton"
        );


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    button.textContent =
        isDark
            ? "☀️"
            : "🌙";

}


/* =========================================
   RESET
========================================= */

function initializeResetButton() {

    const button =
        document.getElementById(
            "resetDataButton"
        );


    button.addEventListener(

        "click",

        () => {

            const confirmation =
                confirm(

                    "Tem certeza que deseja apagar todo o histórico de treinos? Esta ação não pode ser desfeita."

                );


            if (
                !confirmation
            ) {

                return;

            }


            localStorage.removeItem(
                STORAGE_KEYS.workouts
            );


            updateDashboard();

            updateProgressPage();


            alert(
                "Histórico removido."
            );

        }

    );

}