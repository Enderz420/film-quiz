let questions = [];
const ques = document.getElementById('ques');

async function fetchQuestions() {
    try {
        const response =
          await // bare henter 10 tilfeldige spørsmål om film fra en api
          fetch(
            "https://opentdb.com/api.php?amount=10&category=11&type=multiple"
          );
        const data = await response.json();
        questions = data.results;
    }
    catch (error) {
        console.log(error);
        ques.innerHTML = '<h5 style="color: red;"> error </h5>';
    }
}console.log(fetchQuestions());
let currentQuestion = 0;
let score = 0;

if (questions.length === 0) {
    ques.innerHTML = '<h5> Loading Questions...</h5>';
}

function loadQuestion() {
    const opt = document.getElementById('opt');
    if (opt === null) {
        console.log("it fucking died");
        return;
    }
    let currentQuestions = questions[currentQuestion].question;
    if (currentQuestions === undefined) {
        console.log("currentQuestions is undefined");
        return;
    }
    if (currentQuestions.indexOf('&quot;') > -1) {
        currentQuestions = currentQuestions.replace(/&quot;/g, '"');
    }
    if (currentQuestions.indexOf('\'') > -1) {
        currentQuestions = currentQuestions.replace(/'/g, "'");
    }
    ques.innerText = currentQuestions;
    opt.innerHTML = "";
    const correctAnswer = questions[currentQuestion].correct_answer;
    console.log(questions); // Take this out of the actual code later
    const incorrectAnswers = questions[currentQuestion].incorrect_answers;
    const answers = [correctAnswer, ...incorrectAnswers];
    answers.sort(() => Math.random() - 0.5);

    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);    
    options.forEach(option => {
        if (option === null || option === undefined) {
            console.log("option is either undefined or null");
            return;
        }
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
        if (opt === null) {
            console.log("opt is null");
            return;
        }
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
function nextQuestion() {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById('opt').remove();
        document.getElementById('ques').remove();
        document.getElementById('btn').remove();
        loadScore();
    }
}

loadQuestion();