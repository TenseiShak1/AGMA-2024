const allQuestions =[
    {
        "question": "¿Qué papel fundamental juegan los manglares en la mitigación del cambio climático?",
        "options": [
            "Solamente sirven como barrera contra tormentas",
            "Capturan CO2, protegen las costas y son hábitat de especies",
            "Únicamente previenen la erosión costera",
            "Solo proporcionan sombra a las especies marinas"
        ],
        "correct": 1,
        "value": 100
    },
    {
        "question": "¿Por qué es importante la conservación de los viveros de manglar en la Ciénaga Grande de Santa Marta?",
        "options": [
            "Solo para generar ingresos económicos",
            "Exclusivamente para investigación científica",
            "Para restaurar ecosistemas y mantener el equilibrio ecológico",
            "Únicamente para fines turísticos"
        ],
        "correct": 2,
        "value": 100
    },
    {
        "question": "¿Qué impacto tiene la contaminación por residuos sólidos en la Ciénaga Grande?",
        "options": [
            "Solo afecta la estética del paisaje",
            "Daña el ecosistema completo, afectando biodiversidad y comunidades",
            "Únicamente impacta el turismo local",
            "Afecta solo a algunas especies específicas"
        ],
        "correct": 3,
        "value": 100
    },
    {
        "question": "¿Cómo contribuyen los pescadores locales a la conservación de la Ciénaga?",
        "options": [
            "Solo mediante la pesca sostenible",
            "Exclusivamente en la limpieza",
            "Restauración de manglares, conocimiento local y prácticas sostenibles",
            "Únicamente en actividades turísticas"
        ],
        "correct": 2,
        "value": 100
    },
    {
        "question": "¿Por qué se considera la Ciénaga Grande un área protegida?",
        "options": [
            "Exclusivamente por el turismo",
            "Por su biodiversidad, servicios ecosistémicos y valor cultural",
            "Solo por su belleza paisajística",
            "Únicamente por sus recursos pesqueros"
        ],
        "correct": 1,
        "value": 100
    },
    {
        "question": "¿Cómo afecta el cambio climático a la Ciénaga Grande?",
        "options": [
            "Altera patrones climáticos, biodiversidad y medios de vida",
            "Exclusivamente impacta la pesca",
            "Solo aumenta la temperatura del agua",
            "Únicamente afecta el nivel del mar"
        ],
        "correct": 0,
        "value": 100
    },
    {
        "question": "¿Qué papel juega la educación ambiental en la conservación de la Ciénaga?",
        "options": [
            "Solo informar sobre la biodiversidad",
            "Exclusivamente formar guías locales",
            "Generar conciencia y promover acciones de conservación",
            "Únicamente promover el turismo"
        ],
        "correct": 3,
        "value": 100
    },
    {
        "question": "¿Qué importancia tienen las especies migratorias en la Ciénaga?",
        "options": [
            "Exclusivamente para la investigación",
            "Conectividad ecológica y equilibrio del ecosistema",
            "Solo como atractivo turístico",
            "Únicamente para la biodiversidad local"
        ],
        "correct": 2,
        "value": 100
    },
    {
        "question": "¿Qué relación existe entre los manglares y la pesca local?",
        "options": [
            "Criadero natural y sustento de la cadena alimentaria",
            "Únicamente barrera física",
            "Exclusivamente recurso maderable",
            "Solo proporcionan sombra"
        ],
        "correct": 0,
        "value": 100
    },
    {
        "question": "¿Cómo contribuye la biodiversidad al equilibrio de la Ciénaga?",
        "options": [
            "Exclusivamente es decorativa",
            "Mantiene servicios ecosistémicos y resiliencia ambiental",
            "Únicamente proporciona alimento",
            "Solo atrae turismo"
        ],
        "correct": 1,
        "value": 100
    },
    {
        "question": "¿Qué papel juegan las comunidades locales en la conservación?",
        "options": [
            "Solo como guías turísticos",
            "Exclusivamente en la limpieza",
            "Guardianes del ecosistema y conocimiento tradicional",
            "Únicamente en la pesca"
        ],
        "correct": 3,
        "value": 100
    },
    {
        "question": "¿Por qué es importante la adaptación al cambio climático en la Ciénaga?",
        "options": [
            "Exclusivamente por la flora",
            "Para mantener la resiliencia del ecosistema y comunidades",
            "Solo por el turismo",
            "Únicamente por la pesca"
        ],
        "correct": 1,
        "value": 100
    },
    {
        "question": "¿Qué valor tiene el conocimiento tradicional en la conservación?",
        "options": [
            "Exclusivamente para rituales",
            "Solo para el turismo",
            "Gestión sostenible y preservación del ecosistema",
            "Únicamente para la pesca"
        ],
        "correct": 2,
        "value": 100
    },
    {
        "question": "¿Cómo impacta la restauración ecológica en la economía local?",
        "options": [
            "Exclusivamente en empleos temporales",
            "Solo en el turismo",
            "Mejora servicios ecosistémicos y medios de vida",
            "Únicamente en la pesca"
        ],
        "correct": 2,
        "value": 100
    },
    {
        "question": "¿Cómo se relacionan los ODS con la conservación de la Ciénaga?",
        "options": [
            "Exclusivamente en lo social",
            "Desarrollo sostenible integral y bienestar comunitario",
            "Solo en aspectos ambientales",
            "Únicamente en lo económico"
        ],
        "correct": 1,
        "value": 100
    }
];

let questions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let fiftyFiftyUsed = false;
let audienceHelpUsed = false;
let timer;
let timeLeft;
let gameActive = true; 
function displayQuestion() {
    if (!gameActive) return; // No hacer nada si el juego ha terminado
    clearInterval(timer);
    startTimer();
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    updateProgress();
}


function startTimer() {
    timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function displayQuestion() {
    clearInterval(timer);
    startTimer();
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    updateProgress();
}

function selectOption(index) {
    if (!gameActive) return;
    clearInterval(timer);
    const options = document.getElementsByClassName('option');
    const question = questions[currentQuestion];
    Array.from(options).forEach(option => option.classList.remove('selected', 'correct', 'incorrect'));
    options[index].classList.add('selected');

    setTimeout(() => {
        if (index === question.correct) {
            options[index].classList.add('correct');
            let remainingQuestions = questions.length - currentQuestion;
            let adjustedValue = Math.floor(question.value * (remainingQuestions / questions.length));
            score += adjustedValue;
            correctAnswers++;
        } else {
            options[index].classList.add('incorrect');
            options[question.correct].classList.add('correct');
            endGame(); 
        }
        document.getElementById('score').textContent = score;
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion();
            } else {
                endGame();
            }
        }, 1000);
    }, 1000);
}


function endGame() {
    gameActive = false;
    clearInterval(timer);
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('endGameModal').style.display = 'block';
}


function useFiftyFifty() {
    if (fiftyFiftyUsed) return;

    const question = questions[currentQuestion];
    const correctOption = question.correct;

    let incorrectOptions = question.options
        .map((option, index) => index !== correctOption ? index : null)
        .filter(index => index !== null);

    let removedIndexes = [];
    while (removedIndexes.length < 2) {
        const randomIndex = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
        if (!removedIndexes.includes(randomIndex)) {
            removedIndexes.push(randomIndex);
        }
    }

    const options = document.getElementsByClassName('option');
    Array.from(options).forEach((option, index) => {
        if (removedIndexes.includes(index) && index !== correctOption) {
            option.style.display = 'none';
        }
    });

    document.getElementById('fifty-fifty').classList.add('used'); 
    fiftyFiftyUsed = true;
}

function useAudienceHelp() {
    if (audienceHelpUsed) return; 
    const question = questions[currentQuestion];
    const correctOption = question.correct;

    let percentages = Array(question.options.length).fill(0);
    percentages[correctOption] = Math.floor(Math.random() * 31) + 50; 
    let totalRemaining = 100 - percentages[correctOption];

    let remainingIndexes = [...Array(question.options.length).keys()].filter(i => i !== correctOption);
    remainingIndexes.forEach((index, i) => {
        let max = i === remainingIndexes.length - 1 ? totalRemaining : Math.floor(totalRemaining / (remainingIndexes.length - i));
        percentages[index] = Math.floor(Math.random() * (max + 1));
        totalRemaining -= percentages[index];
    });

    const pollContainer = document.getElementById('pollResults');
    pollContainer.innerHTML = ''; // Limpiar el contenedor de resultados

    percentages.forEach((percentage, i) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'poll-bar';
        const bar = document.createElement('div');
        bar.className = 'poll-fill';
        bar.style.width = percentage + '%';
        bar.textContent = percentage + '%';
        barContainer.appendChild(bar);
        pollContainer.appendChild(barContainer);
    });
    document.getElementById('audiencePollModal').style.display = 'block';
    audienceHelpUsed = true;
    document.getElementById('audience').classList.add('used'); // Deshabilitar el botón
}

function closeAudiencePoll() {
    document.getElementById('audiencePollModal').style.display = 'none';
}

function resetGame() {
    gameActive = true; // Reactivar el juego
    clearInterval(timer);
    score = 0;
    correctAnswers = 0;
    currentQuestion = 0;
    fiftyFiftyUsed = false;
    audienceHelpUsed = false;
    questions = [...allQuestions].sort(() => Math.random() - 0.5); // Preguntas aleatorias
    document.getElementById('score').textContent = score;
    document.getElementById('fifty-fifty').classList.remove('used');
    document.getElementById('audience').classList.remove('used');
    document.getElementById('endGameModal').style.display = 'none';
    displayQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

window.onload = () => {
    resetGame();
};
