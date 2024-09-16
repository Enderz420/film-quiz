const exterior = document.getElementById("exterior");
let answer = document.getElementById("answerBox");
let question = document.getElementById("question");
let score = document.getElementById("score");
let number = 0;

function arrayChecker (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    return true;
}
function questionLists() {
    questions = ["When was this movie released?", "Who played the role?"];
    answerSheet = ["midnight", "harry potter"];
    console.log(arrayChecker(questions, answerSheet));
    let answerLower = answer.toLowerCase;
    
    if (answer === "midnight") {
        number++;
        score.append(number);
        console.log(answer);
    }
}

let array1 = [1, 2];
let array2 = [1, 2];
questionLists();
console.log(arrayChecker(array1, array2));