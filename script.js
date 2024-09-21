let questions = [];
const ques = document.getElementById('ques');

async function fetchQuestions() {
    try {
        const response = await
        // bare henter 10 tilfeldige spørsmål om film fra en api
          fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple');
        const data = await response.json();
        Questions = data.results;
    }
    catch (error) {
        console.log(error);
        ques.innerHTML = '<h5 style="color: red;"> error </h5>';
    }
}
fetchQuestions();

let currentQuestion = 0;
let score = 0;

if (questions.length === 0) {
    ques.innerHTML = '<h5> Loading Questions...</h5>';
}

function loadQuestion() {
    const opt = document.getElementById('opt');
    let currentQuestion = questions[currentQuestion].question;
    if (currentQuestion.indexOf('&quot;') > -1) {
        currentQuestion = currentQuestion.replace(/&quot;/g, '"');
    }
    if (currentQuestion.indexOf('\'') > -1) {
        currentQuestion = currentQuestion.replace(/'/g, "'");
    }
    ques.innerText = currentQuestion;
    opt.innerHTML = "";
    const correctAnswer = questions[currentQuestion].correct_answer;
    console.log(questions); // Take this out of the actual code later
    const incorrectAnswers = questions[currentQuestion].incorrect_answers;
    const answers = [correctAnswer, ...incorrectAnswers];
    answers.sort(() => Math.random() - 0.5);

    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);    
    options.forEach(option => {
        // TODO
        // add so that options are added
        // with the radio element
        if (option.indexOf('&quot;') > -1) {
            option = option.replace(/&quot;/g, '"');
        }           
        if (option.indexOf('\'') > -1) {
            option = option.replace(/'/g, "'");
        }
        const choiceDiv = document.createElement('div');
        const choice = document.createElement('input');
        const labelChoice = document.createElement('label');
        choice.type = 'radio';
        choice.name = 'answer';
        choice.value = option;
        labelChoice.textContent = option;
        choiceDiv.appendChild(choice);
        choiceDiv.appendChild(labelChoice);
        opt.appendChild(choiceDiv);
    });
}

setTimeout(() => {
    loadQuestion();
    if (Question.length === 0) {
        ques.innerHTML = '<h5> No Questions </h5>';
    }
}, 2000);

function checkAns() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;

    if (selectedAnswer === questions[currentQuestion].correct_answer) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
}

// TODO
// Create nextQuestion function to increment the next question variable and load the next question
function nextQuestion() {}