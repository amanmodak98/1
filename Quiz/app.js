const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris"
        },
        correctAnswer: "c"
    },
    {
        question: "Which programming language is used for web development?",
        answers: {
            a: "Java",
            b: "Python",
            c: "JavaScript"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Mars"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
            a: "China",
            b: "Japan",
            c: "India"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the currency of Japan?",
        answers: {
            a: "Yuan",
            b: "Won",
            c: "Yen"
        },
        correctAnswer: "c"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "Charles Dickens",
            b: "William Shakespeare",
            c: "Jane Austen"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Mars",
            b: "Venus",
            c: "Mercury"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: {
            a: "Elephant",
            b: "Blue Whale",
            c: "Giraffe"
        },
        correctAnswer: "b"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: {
            a: "Oxygen",
            b: "Gold",
            c: "Iron"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Australia?",
        answers: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra"
        },
        correctAnswer: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((question, index) => {
        const answers = [];
        for (const option in question.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}: ${question.answers[option]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${index + 1}. ${question.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    quizData.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    resultsContainer.innerHTML = `Your score: ${score} out of ${quizData.length}`;
    resultsContainer.style.display = 'block';
}

buildQuiz();

submitButton.addEventListener('click', showResults);
