// Данные тренировок
const workouts = {
    1: {
        name: "Тренировка 1: Спина и Грудь",
        subtitle: "Акцент на верх тела",
        duration: "60-90 мин",
        hasWarmup: true,
        exercises: [
            {
                name: "Подтягивания в гравитроне",
                currentWeight: -35,
                targetReps: [8, 10],
                sets: 4,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Universal Row & Incline press",
                currentWeight: 20, // Row
                currentWeight2: 15, // Incline
                targetReps: [8, 10],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                isDual: true
            },
            {
                name: "Тяга вертикального блока",
                currentWeight: 35,
                targetReps: [8, 10],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Жим в тренажере (Chest Press)",
                currentWeight: 32.5,
                targetReps: [8, 10],
                sets: 4,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Разгибание ног в тренажере Leg curl",
                currentWeight: 45,
                targetReps: [8, 10],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Сведение-разведение бедер в блоке",
                currentWeight: 55,
                targetReps: [12, 12],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "ОПЦИОНАЛЬНО (КОР): Планка",
                currentWeight: 0,
                targetReps: [45, 60],
                sets: 3,
                optional: true,
                type: "bodyweight",
                isTime: true
            }
        ]
    },
    2: {
        name: "Тренировка 2: Тяжелые Ноги",
        subtitle: "Акцент на низ",
        duration: "55-65 мин",
        hasWarmup: true,
        exercises: [
            {
                name: "Приседания в Смите",
                currentWeight: 50,
                targetReps: [10, 10],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5
            },
            {
                name: "Жим ногами",
                currentWeight: 120,
                targetReps: [10, 12],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 10
            },
            {
                name: "Ягодичный мостик",
                currentWeight: 100,
                targetReps: [10, 10],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5
            },
            {
                name: "Поднятие на носки в Смите",
                currentWeight: 50,
                targetReps: [12, 12],
                sets: 4,
                optional: false,
                type: "isolation",
                weightStep: 5
            },
            {
                name: "Разгибание ног Leg extension",
                currentWeight: 40,
                targetReps: [10, 12],
                sets: 4,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "ОПЦИОНАЛЬНО (КОР): Подъем ног в висе или лежа",
                currentWeight: 0,
                targetReps: [15, 20],
                sets: 3,
                optional: true,
                type: "bodyweight"
            }
        ]
    },
    3: {
        name: "Тренировка 3: Плечи, Грудь и Ягодицы",
        subtitle: "Доработка + Разминка/Заминка",
        duration: "90-120 мин",
        hasWarmup: true,
        exercises: [
            {
                name: "Болгарский выпад в Смите",
                currentWeight: 37.5,
                targetReps: [8, 8],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 2.5
            },
            {
                name: "Жим штанги в Смите (наклон 30°)",
                currentWeight: 30,
                targetReps: [10, 10],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Сведения и разведения в Пек-дек",
                currentWeight: 17.5, // Сведение
                currentWeight2: 12.5, // Разведение
                targetReps: [10, 10],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                isDual: true
            },
            {
                name: "Delts machine",
                currentWeight: 27.5,
                targetReps: [8, 8],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Гиперэкстензия",
                currentWeight: 15,
                targetReps: [10, 10],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Бицепс arm extension machine",
                currentWeight: 45,
                targetReps: [8, 8],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "ОПЦИОНАЛЬНО (КОР): Скручивания в кроссовере или на фитболе",
                currentWeight: 0,
                targetReps: [15, 20],
                sets: 3,
                optional: true,
                type: "bodyweight"
            }
        ]
    },
    4: {
        name: "Тренировка 4: Верх тела + Жиросжигание",
        subtitle: "Подтянутые руки и плечи",
        duration: "50-60 мин",
        hasWarmup: true,
        hasCooldown: true,
        exercises: [
            {
                name: "Тяга горизонтального блока",
                currentWeight: 30,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Жим в тренажере на плечи (Shoulder Press)",
                currentWeight: 20,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Разгибание рук на блоке (Трицепс)",
                currentWeight: 15,
                targetReps: [15, 15],
                sets: 4,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Для подтянутых рук!"
            },
            {
                name: "Сгибание рук в тренажере (Бицепс)",
                currentWeight: 20,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Разведение рук в тренажере Pec-Deck (обратный хват)",
                currentWeight: 15,
                targetReps: [15, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Для задней дельты"
            },
            {
                name: "Скручивания в кроссовере стоя",
                currentWeight: 20,
                targetReps: [15, 20],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Для живота"
            },
            {
                name: "КАРДИО: Эллипсоид интервалы",
                currentWeight: 0,
                targetReps: [5, 5],
                sets: 1,
                optional: false,
                type: "cardio",
                isTime: true,
                note: "5 мин: 30 сек быстро / 30 сек медленно"
            }
        ]
    },
    5: {
        name: "Тренировка 5: Ноги и Ягодицы (Тонус)",
        subtitle: "Подтянутые ноги без перекачки",
        duration: "55-65 мин",
        hasWarmup: true,
        hasCooldown: true,
        exercises: [
            {
                name: "Ягодичный мостик в тренажере",
                currentWeight: 80,
                targetReps: [15, 15],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "Легче чем в тренировке 2, больше повторений"
            },
            {
                name: "Отведение ноги в тренажере (Abductor)",
                currentWeight: 40,
                targetReps: [15, 20],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 5,
                note: "Для ягодиц"
            },
            {
                name: "Сведение ног в тренажере (Adductor)",
                currentWeight: 45,
                targetReps: [15, 20],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 5,
                note: "Внутренняя часть бедра"
            },
            {
                name: "Разгибание ног (Leg Extension)",
                currentWeight: 30,
                targetReps: [15, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Сгибание ног (Leg Curl)",
                currentWeight: 30,
                targetReps: [15, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Жим одной ногой в тренажере",
                currentWeight: 40,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "Каждой ногой отдельно"
            },
            {
                name: "КАРДИО: Степпер интервалы",
                currentWeight: 0,
                targetReps: [5, 5],
                sets: 1,
                optional: false,
                type: "cardio",
                isTime: true,
                note: "5 мин: 30 сек быстро / 30 сек медленно"
            }
        ]
    },
    6: {
        name: "Тренировка 6: Круговая (Все тело)",
        subtitle: "Жиросжигание + общий тонус",
        duration: "45-55 мин",
        hasWarmup: true,
        hasCooldown: true,
        isCircuit: true,
        exercises: [
            {
                name: "КРУГ 1-3: Жим в тренажере (Chest Press)",
                currentWeight: 20,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                note: "3 круга, минимум отдыха"
            },
            {
                name: "КРУГ 1-3: Тяга вертикального блока",
                currentWeight: 25,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "КРУГ 1-3: Жим ногами",
                currentWeight: 60,
                targetReps: [15, 15],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 10
            },
            {
                name: "КРУГ 1-3: Жим на плечи",
                currentWeight: 15,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "КРУГ 1-3: Скручивания на блоке",
                currentWeight: 15,
                targetReps: [20, 20],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Для живота"
            },
            {
                name: "Велосипед / Эллипсоид",
                currentWeight: 0,
                targetReps: [10, 10],
                sets: 1,
                optional: false,
                type: "cardio",
                isTime: true,
                note: "10 мин средний темп в конце"
            }
        ]
    },
    7: {
        name: "Тренировка 7: Upper/Lower - Верх",
        subtitle: "Популярная схема сплита",
        duration: "60-70 мин",
        hasWarmup: true,
        isPopular: true,
        exercises: [
            {
                name: "Жим штанги в Смите (наклон 30°)",
                currentWeight: 30,
                targetReps: [8, 12],
                sets: 4,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                note: "Верх груди"
            },
            {
                name: "Тяга вертикального блока (широкий хват)",
                currentWeight: 35,
                targetReps: [10, 12],
                sets: 4,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                note: "Спина - ширина"
            },
            {
                name: "Жим гантелей на плечи в тренажере",
                currentWeight: 20,
                targetReps: [10, 12],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5
            },
            {
                name: "Тяга горизонтального блока",
                currentWeight: 30,
                targetReps: [10, 12],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                note: "Спина - толщина"
            },
            {
                name: "Разгибание рук на блоке (канат)",
                currentWeight: 15,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Трицепс"
            },
            {
                name: "Сгибание рук со штангой EZ в тренажере",
                currentWeight: 20,
                targetReps: [10, 12],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Бицепс"
            },
            {
                name: "Разведение рук в Pec-Deck (обратное)",
                currentWeight: 15,
                targetReps: [15, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Задняя дельта"
            }
        ]
    },
    8: {
        name: "Тренировка 8: Upper/Lower - Низ",
        subtitle: "Популярная схема сплита",
        duration: "60-70 мин",
        hasWarmup: true,
        isPopular: true,
        exercises: [
            {
                name: "Приседания в Смите (стопы вперед)",
                currentWeight: 45,
                targetReps: [8, 12],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "Акцент на ягодицы"
            },
            {
                name: "Румынская тяга в Смите",
                currentWeight: 40,
                targetReps: [10, 12],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "Задняя поверхность бедра"
            },
            {
                name: "Жим ногами (стопы высоко и широко)",
                currentWeight: 100,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 10,
                note: "Акцент на ягодицы"
            },
            {
                name: "Болгарский выпад в Смите",
                currentWeight: 35,
                targetReps: [10, 12],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 2.5,
                note: "Каждой ногой"
            },
            {
                name: "Сгибание ног лежа (Leg Curl)",
                currentWeight: 35,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Разгибание ног (Leg Extension)",
                currentWeight: 35,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5
            },
            {
                name: "Поднятие на носки в тренажере",
                currentWeight: 50,
                targetReps: [15, 20],
                sets: 4,
                optional: false,
                type: "isolation",
                weightStep: 5,
                note: "Икры"
            }
        ]
    },
    9: {
        name: "Тренировка 9: Booty Builder 🍑",
        subtitle: "Популярная инста-программа",
        duration: "55-65 мин",
        hasWarmup: true,
        isPopular: true,
        exercises: [
            {
                name: "Ягодичный мостик (пауза вверху 2 сек)",
                currentWeight: 90,
                targetReps: [12, 15],
                sets: 4,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "ГЛАВНОЕ упражнение! Сжимай ягодицы вверху"
            },
            {
                name: "Отведение ноги в кроссовере (стоя)",
                currentWeight: 10,
                targetReps: [15, 20],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Каждой ногой, медленно"
            },
            {
                name: "Жим одной ногой в тренажере",
                currentWeight: 50,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "legs",
                weightStep: 5,
                note: "Каждой ногой, пятка в платформе"
            },
            {
                name: "Отведение ноги в тренажере (Abductor)",
                currentWeight: 50,
                targetReps: [15, 20],
                sets: 4,
                optional: false,
                type: "isolation",
                weightStep: 5,
                note: "Медленно, чувствуй ягодицы"
            },
            {
                name: "Сгибание ног (Leg Curl) - с паузой",
                currentWeight: 35,
                targetReps: [12, 15],
                sets: 3,
                optional: false,
                type: "isolation",
                weightStep: 2.5,
                note: "Пауза 1 сек вверху"
            },
            {
                name: "Гиперэкстензия (акцент на ягодицы)",
                currentWeight: 10,
                targetReps: [15, 20],
                sets: 3,
                optional: false,
                type: "compound",
                weightStep: 2.5,
                note: "Округляй спину, работают ягодицы"
            },
            {
                name: "Ходьба на степпере",
                currentWeight: 0,
                targetReps: [10, 10],
                sets: 1,
                optional: false,
                type: "cardio",
                isTime: true,
                note: "10 мин финиш - добить ягодицы"
            }
        ]
    }
};

// Глобальные переменные
let currentWorkout = null;
let mainTimerInterval = null;
let mainTimerSeconds = 0;
let cardioTimerInterval = null;
let cardioSeconds = 8 * 60;
let restTimerInterval = null;
let restSeconds = 60;
let workoutStartTime = null;
let completedSets = {};
let repsData = {}; // Хранит количество повторений для каждого подхода
let weightsData = {}; // Хранит актуальные веса упражнений

// Загрузка сохраненных весов
function loadWeights() {
    const saved = localStorage.getItem('exerciseWeights');
    if (saved) {
        weightsData = JSON.parse(saved);
    }
}

// Сохранение весов
function saveWeights() {
    localStorage.setItem('exerciseWeights', JSON.stringify(weightsData));
}

// Получить текущий вес упражнения
function getExerciseWeight(workoutId, exerciseIndex) {
    const key = `${workoutId}-${exerciseIndex}`;
    if (weightsData[key]) {
        return weightsData[key];
    }
    const exercise = workouts[workoutId].exercises[exerciseIndex];
    return {
        weight: exercise.currentWeight,
        weight2: exercise.currentWeight2 || null
    };
}

// Обновить вес упражнения
function updateExerciseWeight(workoutId, exerciseIndex, newWeight, newWeight2 = null) {
    const key = `${workoutId}-${exerciseIndex}`;
    weightsData[key] = {
        weight: newWeight,
        weight2: newWeight2,
        lastUpdated: new Date().toISOString()
    };
    saveWeights();
}

// Проверить, пора ли увеличивать вес
function shouldIncreaseWeight(exerciseIndex) {
    const exercise = workouts[currentWorkout].exercises[exerciseIndex];
    const targetMax = exercise.targetReps[1];

    // Проверяем все подходы упражнения
    let allSetsComplete = true;
    let allSetsMaxReps = true;

    for (let i = 0; i < exercise.sets; i++) {
        const setKey = `${exerciseIndex}-${i}`;
        const repsKey = `${exerciseIndex}-${i}-reps`;

        if (!completedSets[setKey]) {
            allSetsComplete = false;
            break;
        }

        const reps = parseInt(repsData[repsKey]) || 0;
        if (reps < targetMax) {
            allSetsMaxReps = false;
        }
    }

    return allSetsComplete && allSetsMaxReps;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadWeights();
    initializeApp();
});

function initializeApp() {
    // Кнопки навигации
    document.querySelectorAll('.start-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const workoutId = parseInt(e.target.dataset.workout);
            startWorkout(workoutId);
        });
    });

    document.getElementById('backBtn').addEventListener('click', () => {
        if (confirm('Вы уверены? Прогресс тренировки будет потерян.')) {
            endWorkout(false);
        }
    });

    document.getElementById('finishBtn').addEventListener('click', () => {
        finishWorkout();
    });

    document.getElementById('historyBtn').addEventListener('click', () => {
        showScreen('historyScreen');
        loadHistory();
    });

    document.getElementById('adviceBtn').addEventListener('click', () => {
        showScreen('adviceScreen');
    });

    document.getElementById('statsBtn').addEventListener('click', () => {
        showScreen('statsScreen');
        loadStats();
    });

    document.querySelectorAll('.back-to-main').forEach(btn => {
        btn.addEventListener('click', () => showScreen('mainScreen'));
    });

    // Кардио таймер
    document.getElementById('cardioStartBtn').addEventListener('click', toggleCardioTimer);
    document.getElementById('cardioResetBtn').addEventListener('click', resetCardioTimer);
    document.getElementById('cardioSkipBtn').addEventListener('click', skipCardio);

    // Таймер отдыха
    document.getElementById('restAddBtn').addEventListener('click', () => {
        restSeconds += 15;
        updateRestTimer();
    });

    document.getElementById('restStopBtn').addEventListener('click', stopRestTimer);

    // Калькулятор
    document.getElementById('calculateBtn').addEventListener('click', calculateCalories);

    // Очистка истории
    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        if (confirm('Удалить всю историю тренировок?')) {
            localStorage.removeItem('workoutHistory');
            loadHistory();
        }
    });
}

// Управление экранами
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Начало тренировки
function startWorkout(workoutId) {
    currentWorkout = workoutId;
    completedSets = {};
    repsData = {};
    mainTimerSeconds = 0;
    workoutStartTime = new Date();

    const workout = workouts[workoutId];

    // Показываем экран тренировки
    showScreen('workoutScreen');

    // Показываем кардио разминку (8 минут для всех тренировок)
    const cardioSection = document.getElementById('cardioSection');
    if (workout.hasWarmup) {
        cardioSection.classList.remove('hidden');
        resetCardioTimer();
    } else {
        cardioSection.classList.add('hidden');
    }

    // Рендерим упражнения
    renderExercises(workout);

    // Запускаем основной таймер
    startMainTimer();
}

// Восстановление состояния тренировки (после перерисовки)
function restoreWorkoutState() {
    Object.keys(completedSets).forEach(key => {
        if (completedSets[key]) {
            const [exerciseIndex, setIndex] = key.split('-');
            const checkbox = document.getElementById(`set-${exerciseIndex}-${setIndex}`);
            if (checkbox) {
                checkbox.checked = true;
                const setItem = checkbox.closest('.set-item');
                if (setItem) setItem.classList.add('completed');
            }
        }
    });

    Object.keys(repsData).forEach(key => {
        const reps = repsData[key];
        const inputId = key.replace('-reps', '');
        const input = document.getElementById(`reps-${inputId}`);
        if (input) {
            input.value = reps;
        }
    });

    // Проверяем индикаторы прогресса
    const workout = workouts[currentWorkout];
    workout.exercises.forEach((_, exerciseIndex) => {
        checkProgressIndicator(exerciseIndex);
    });
}

// Рендер упражнений
function renderExercises(workout) {
    const container = document.getElementById('exercisesList');
    container.innerHTML = '';

    workout.exercises.forEach((exercise, exerciseIndex) => {
        const card = document.createElement('div');
        const cardClasses = ['exercise-card'];
        if (exercise.optional) cardClasses.push('optional');
        if (exercise.type === 'cardio') cardClasses.push('cardio');
        card.className = cardClasses.join(' ');
        card.id = `exercise-${exerciseIndex}`;

        const header = document.createElement('div');
        header.className = 'exercise-header';

        const title = document.createElement('div');
        title.className = 'exercise-title';

        const weights = getExerciseWeight(currentWorkout, exerciseIndex);
        const weightDisplay = exercise.isDual
            ? `${Math.abs(weights.weight)} кг / ${Math.abs(weights.weight2)} кг`
            : exercise.type === 'bodyweight'
                ? 'Без веса'
                : `${Math.abs(weights.weight)} кг`;

        const repsDisplay = exercise.isTime
            ? `${exercise.targetReps[0]}-${exercise.targetReps[1]} сек`
            : exercise.type === 'cardio'
                ? `${exercise.targetReps[0]} минут`
                : `${exercise.targetReps[0]}-${exercise.targetReps[1]} раз`;

        const noteHtml = exercise.note ? `<div class="exercise-note">💡 ${exercise.note}</div>` : '';

        title.innerHTML = `
            <h3>${exercise.name}</h3>
            <div class="exercise-details">
                <strong>Вес:</strong> ${weightDisplay} |
                <strong>Цель:</strong> ${repsDisplay}
            </div>
            ${noteHtml}
        `;

        header.appendChild(title);

        const controls = document.createElement('div');
        controls.className = 'exercise-controls';

        if (exercise.optional) {
            const badge = document.createElement('span');
            badge.className = 'optional-badge';
            badge.textContent = 'ОПЦИОНАЛЬНО';
            controls.appendChild(badge);
        }

        if (exercise.type !== 'bodyweight' && exercise.type !== 'cardio') {
            const weightBtn = document.createElement('button');
            weightBtn.className = 'btn btn-secondary btn-small';
            weightBtn.textContent = '⚙️ Вес';
            weightBtn.onclick = () => openWeightModal(exerciseIndex, exercise);
            controls.appendChild(weightBtn);
        }

        header.appendChild(controls);

        // Индикатор увеличения веса
        const progressIndicator = document.createElement('div');
        progressIndicator.className = 'progress-indicator';
        progressIndicator.id = `progress-${exerciseIndex}`;
        progressIndicator.style.display = 'none';

        const setsGrid = document.createElement('div');
        setsGrid.className = 'sets-grid';

        for (let i = 0; i < exercise.sets; i++) {
            const setItem = document.createElement('div');
            setItem.className = 'set-item';
            setItem.dataset.exercise = exerciseIndex;
            setItem.dataset.set = i;

            const checkboxRow = document.createElement('div');
            checkboxRow.className = 'set-checkbox-row';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'set-checkbox';
            checkbox.id = `set-${exerciseIndex}-${i}`;

            const label = document.createElement('label');
            label.className = 'set-label';
            label.htmlFor = `set-${exerciseIndex}-${i}`;
            label.textContent = `Подход ${i + 1}`;

            checkboxRow.appendChild(checkbox);
            checkboxRow.appendChild(label);

            const repsInput = document.createElement('input');
            repsInput.type = 'number';
            repsInput.className = 'reps-input';
            repsInput.placeholder = exercise.isTime ? 'сек' : 'раз';
            repsInput.min = 0;
            repsInput.id = `reps-${exerciseIndex}-${i}`;

            setItem.appendChild(checkboxRow);
            setItem.appendChild(repsInput);

            // Обработчик клика на чекбокс
            checkbox.addEventListener('change', (e) => {
                handleSetComplete(exerciseIndex, i, e.target.checked, repsInput.value);
            });

            // Обработчик изменения повторений
            repsInput.addEventListener('change', (e) => {
                const repsKey = `${exerciseIndex}-${i}-reps`;
                repsData[repsKey] = e.target.value;
                checkProgressIndicator(exerciseIndex);
            });

            setsGrid.appendChild(setItem);
        }

        card.appendChild(header);
        card.appendChild(progressIndicator);
        card.appendChild(setsGrid);
        container.appendChild(card);
    });
}

// Обработка завершения подхода
function handleSetComplete(exerciseIndex, setIndex, isCompleted, reps) {
    const key = `${exerciseIndex}-${setIndex}`;
    const repsKey = `${exerciseIndex}-${setIndex}-reps`;

    completedSets[key] = isCompleted;

    if (reps) {
        repsData[repsKey] = reps;
    }

    const setItem = document.querySelector(`[data-exercise="${exerciseIndex}"][data-set="${setIndex}"]`);
    if (isCompleted) {
        setItem.classList.add('completed');
        // Запускаем таймер отдыха
        startRestTimer();
        // Проверяем прогресс
        checkProgressIndicator(exerciseIndex);
    } else {
        setItem.classList.remove('completed');
    }
}

// Проверка индикатора прогресса
function checkProgressIndicator(exerciseIndex) {
    const indicator = document.getElementById(`progress-${exerciseIndex}`);
    if (!indicator) return;

    if (shouldIncreaseWeight(exerciseIndex)) {
        const exercise = workouts[currentWorkout].exercises[exerciseIndex];
        indicator.innerHTML = `
            <div class="progress-alert">
                🎉 Отлично! Пора увеличить вес на +${exercise.weightStep} кг
            </div>
        `;
        indicator.style.display = 'block';
    } else {
        indicator.style.display = 'none';
    }
}

// Модальное окно для изменения веса
function openWeightModal(exerciseIndex, exercise) {
    const weights = getExerciseWeight(currentWorkout, exerciseIndex);
    const currentWeight = weights.weight;
    const currentWeight2 = weights.weight2;

    let promptText = `Текущий вес: ${Math.abs(currentWeight)} кг\n`;
    if (exercise.isDual && currentWeight2 !== null) {
        promptText += `Второй вес: ${Math.abs(currentWeight2)} кг\n`;
    }
    promptText += `Рекомендуемый шаг: +${exercise.weightStep} кг\n\n`;
    promptText += `Введите новый вес (кг):`;

    const newWeightStr = prompt(promptText, Math.abs(currentWeight));
    if (newWeightStr === null) return;

    const newWeight = parseFloat(newWeightStr);
    if (isNaN(newWeight)) {
        alert('Неверный формат веса');
        return;
    }

    let newWeight2 = currentWeight2;
    if (exercise.isDual && currentWeight2 !== null) {
        const newWeight2Str = prompt(`Введите второй вес (кг):`, Math.abs(currentWeight2));
        if (newWeight2Str !== null) {
            newWeight2 = parseFloat(newWeight2Str);
            if (isNaN(newWeight2)) {
                alert('Неверный формат второго веса');
                return;
            }
        }
    }

    // Для гравитрона вес отрицательный
    const finalWeight = exercise.name.includes('гравитрон') ? -Math.abs(newWeight) : newWeight;
    const finalWeight2 = newWeight2 !== null && !exercise.name.includes('гравитрон') ? newWeight2 : newWeight2;

    updateExerciseWeight(currentWorkout, exerciseIndex, finalWeight, finalWeight2);

    // Перерендерим упражнение
    const workout = workouts[currentWorkout];
    renderExercises(workout);
    restoreWorkoutState();
}

// Основной таймер
function startMainTimer() {
    if (mainTimerInterval) clearInterval(mainTimerInterval);

    mainTimerInterval = setInterval(() => {
        mainTimerSeconds++;
        updateMainTimer();
    }, 1000);
}

function updateMainTimer() {
    const hours = Math.floor(mainTimerSeconds / 3600);
    const minutes = Math.floor((mainTimerSeconds % 3600) / 60);
    const seconds = mainTimerSeconds % 60;

    document.getElementById('mainTimer').textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Кардио таймер
function toggleCardioTimer() {
    const btn = document.getElementById('cardioStartBtn');

    if (cardioTimerInterval) {
        clearInterval(cardioTimerInterval);
        cardioTimerInterval = null;
        btn.textContent = 'Продолжить';
    } else {
        cardioTimerInterval = setInterval(() => {
            if (cardioSeconds > 0) {
                cardioSeconds--;
                updateCardioTimer();
            } else {
                completeCardio();
            }
        }, 1000);
        btn.textContent = 'Пауза';
    }
}

function updateCardioTimer() {
    const minutes = Math.floor(cardioSeconds / 60);
    const seconds = cardioSeconds % 60;
    document.getElementById('cardioTimer').textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function resetCardioTimer() {
    clearInterval(cardioTimerInterval);
    cardioTimerInterval = null;
    cardioSeconds = 8 * 60;
    updateCardioTimer();
    document.getElementById('cardioStartBtn').textContent = 'Начать';
    document.getElementById('cardioSection').classList.remove('completed');
}

function skipCardio() {
    clearInterval(cardioTimerInterval);
    document.getElementById('cardioSection').classList.add('completed');
}

function completeCardio() {
    clearInterval(cardioTimerInterval);
    cardioTimerInterval = null;
    document.getElementById('cardioSection').classList.add('completed');
    document.getElementById('cardioTimer').textContent = '00:00';
    document.getElementById('cardioStartBtn').textContent = 'Завершено!';
    document.getElementById('cardioStartBtn').disabled = true;
}

// Таймер отдыха
function startRestTimer() {
    restSeconds = 60;
    updateRestTimer();
    document.getElementById('restTimer').classList.add('active');

    if (restTimerInterval) clearInterval(restTimerInterval);

    restTimerInterval = setInterval(() => {
        if (restSeconds > 0) {
            restSeconds--;
            updateRestTimer();
        } else {
            stopRestTimer();
            // Звуковое уведомление (можно добавить)
            playBeep();
        }
    }, 1000);
}

function updateRestTimer() {
    const minutes = Math.floor(restSeconds / 60);
    const seconds = restSeconds % 60;
    document.getElementById('restTime').textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function stopRestTimer() {
    clearInterval(restTimerInterval);
    restTimerInterval = null;
    document.getElementById('restTimer').classList.remove('active');
}

function playBeep() {
    // Простой звуковой сигнал
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Завершение тренировки
function finishWorkout() {
    const completedCount = Object.values(completedSets).filter(v => v).length;
    const totalSets = Object.keys(completedSets).length;

    if (completedCount === 0) {
        if (!confirm('Вы не отметили ни одного подхода. Всё равно завершить?')) {
            return;
        }
    }

    // Сохраняем в историю
    saveWorkoutToHistory();

    // Показываем сообщение
    alert(`Тренировка завершена!\n\nВремя: ${formatTime(mainTimerSeconds)}\nВыполнено подходов: ${completedCount}`);

    endWorkout(true);
}

function endWorkout(completed) {
    clearInterval(mainTimerInterval);
    clearInterval(cardioTimerInterval);
    clearInterval(restTimerInterval);

    mainTimerSeconds = 0;
    currentWorkout = null;
    completedSets = {};

    document.getElementById('cardioStartBtn').disabled = false;

    showScreen('mainScreen');
}

// Сохранение истории
function saveWorkoutToHistory() {
    const workout = workouts[currentWorkout];
    const completedCount = Object.values(completedSets).filter(v => v).length;

    const workoutData = {
        id: Date.now(),
        date: new Date().toISOString(),
        workoutId: currentWorkout,
        workoutName: workout.name,
        duration: mainTimerSeconds,
        completedSets: completedCount,
        totalSets: Object.keys(completedSets).length
    };

    const history = getWorkoutHistory();
    history.unshift(workoutData);

    // Храним последние 50 тренировок
    if (history.length > 50) {
        history.pop();
    }

    localStorage.setItem('workoutHistory', JSON.stringify(history));
}

function getWorkoutHistory() {
    const history = localStorage.getItem('workoutHistory');
    return history ? JSON.parse(history) : [];
}

// Загрузка истории
function loadHistory() {
    const history = getWorkoutHistory();
    const container = document.getElementById('historyList');

    if (history.length === 0) {
        container.innerHTML = '<div class="history-item empty">История пуста. Начните свою первую тренировку!</div>';
        return;
    }

    container.innerHTML = '';

    history.forEach(workout => {
        const item = document.createElement('div');
        item.className = 'history-item';

        const date = new Date(workout.date);
        const dateStr = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        item.innerHTML = `
            <div class="history-header">
                <h3>${workout.workoutName}</h3>
                <span class="history-date">${dateStr}</span>
            </div>
            <div class="history-stats">
                <span>⏱️ ${formatTime(workout.duration)}</span>
                <span>✅ ${workout.completedSets}/${workout.totalSets} подходов</span>
                <span>📊 ${Math.round((workout.completedSets / workout.totalSets) * 100)}%</span>
            </div>
        `;

        container.appendChild(item);
    });
}

// Загрузка статистики
function loadStats() {
    const history = getWorkoutHistory();
    const container = document.getElementById('statsContent');

    if (history.length === 0) {
        container.innerHTML = '<div class="stat-card"><p>Нет данных для статистики</p></div>';
        return;
    }

    // Подсчет статистики
    const totalWorkouts = history.length;
    const totalTime = history.reduce((sum, w) => sum + w.duration, 0);
    const avgTime = totalTime / totalWorkouts;
    const totalSets = history.reduce((sum, w) => sum + w.completedSets, 0);

    // Подсчет по типам тренировок
    const workoutCounts = {};
    history.forEach(w => {
        workoutCounts[w.workoutId] = (workoutCounts[w.workoutId] || 0) + 1;
    });

    container.innerHTML = `
        <div class="stat-card">
            <h3>💪 Всего тренировок</h3>
            <div class="stat-value">${totalWorkouts}</div>
            <div class="stat-label">тренировок</div>
        </div>

        <div class="stat-card">
            <h3>⏱️ Общее время</h3>
            <div class="stat-value">${Math.round(totalTime / 3600)}</div>
            <div class="stat-label">часов</div>
        </div>

        <div class="stat-card">
            <h3>📊 Среднее время</h3>
            <div class="stat-value">${Math.round(avgTime / 60)}</div>
            <div class="stat-label">минут</div>
        </div>

        <div class="stat-card">
            <h3>✅ Всего подходов</h3>
            <div class="stat-value">${totalSets}</div>
            <div class="stat-label">подходов</div>
        </div>

        <div class="stat-card">
            <h3>🏋️ Тренировка 1</h3>
            <div class="stat-value">${workoutCounts[1] || 0}</div>
            <div class="stat-label">раз</div>
        </div>

        <div class="stat-card">
            <h3>🦵 Тренировка 2</h3>
            <div class="stat-value">${workoutCounts[2] || 0}</div>
            <div class="stat-label">раз</div>
        </div>

        <div class="stat-card">
            <h3>💪 Тренировка 3</h3>
            <div class="stat-value">${workoutCounts[3] || 0}</div>
            <div class="stat-label">раз</div>
        </div>
    `;
}

// Калькулятор калорий
function calculateCalories() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const age = parseInt(document.getElementById('ageInput').value);
    const gender = document.getElementById('genderInput').value;

    if (!weight || !height || !age) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    // Формула Mifflin-St Jeor
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Умножаем на коэффициент активности (3 тренировки в неделю = 1.55)
    const tdee = Math.round(bmr * 1.55);
    const bulkCalories = tdee + 300; // Для набора массы
    const cutCalories = tdee - 300; // Для похудения
    const protein = Math.round(weight * 2); // 2г на кг

    const resultDiv = document.getElementById('calcResult');
    resultDiv.innerHTML = `
        <h4>📊 Результаты:</h4>
        <p><strong>Базовый метаболизм (BMR):</strong> ${Math.round(bmr)} ккал/день</p>
        <p><strong>Поддержка веса (TDEE):</strong> ${tdee} ккал/день</p>
        <p><strong>Набор массы:</strong> ${bulkCalories} ккал/день (+300)</p>
        <p><strong>Похудение:</strong> ${cutCalories} ккал/день (-300)</p>
        <p><strong>Белок:</strong> ${protein}г в день (2г на кг веса)</p>
        <br>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">
            💡 Совет: Начни с поддержки веса на 2 недели, затем увеличь на +200-300 ккал
            для набора массы. Отслеживай вес каждую неделю.
        </p>
    `;
    resultDiv.classList.add('active');
}

// Вспомогательные функции
function pad(num) {
    return num.toString().padStart(2, '0');
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}ч ${minutes}м`;
    }
    return `${minutes}м ${secs}с`;
}
