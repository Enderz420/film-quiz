function createQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        const output = [];
        let answers;

        for (let i=0; i<questions.length; i++){
            answers = [];
            for (let letter in questions[i].answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${i}" value="${letter}">
                        ${letter} :
                        ${questions[i].answers[letter]}
                    </label>`
                );
            }
    }

    function showResults(questions, quizContainer, resultsContainer){
        
    }

    showQuestions(questions, quizContainer);

    submitButton.addEventListener('click', () => {
        showResults(questions, quizContainer, resultsContainer);
    });
}}

const questions = [
    {
        question: "Hvilken film er dette?",
        answers: {
            a: "Inception",
            b: "Interstellar",
            c: "Breaking Bad"
        },
        correctAnswer: "b"
    },
    {
        question: "Hvem skrev Inception?",
        answers: {
            a: "Christopher Nolan",
            b: "Steven Speilberg",
            c: "Quentin Tarantino",
            d: "Akira Kurosawa"
        },
        correctAnswer: "a"
    }
];
