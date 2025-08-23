let quizArray = []; 

let correctParent = document.getElementById("correctAnswerDiv");
let fillerParent = document.getElementById("fillerAnswerDiv");

let getFiller = document.getElementById("addFillerAnswerButton");
let getCorrect = document.getElementById("addCorrectAnswerButton");

getFiller.addEventListener("click", () => {
    const newInput =  document.createElement("INPUT");
    newInput.className = "fillerAnswer";
    newInput.setAttribute("type", "text");
    fillerParent.appendChild(newInput);
});

getCorrect.addEventListener("click", () => {
    const newInput = document.createElement("INPUT");
    newInput.className = "correctAnswer";
    newInput.setAttribute("type", "text");
    correctParent.appendChild(newInput);
})

let getSubmitButton = document.getElementById("submitQuestionButton");

getSubmitButton.addEventListener("click", () => {
    let question = document.getElementById("question");
    let actualQuestion = question.value;

    let fillerInputs = document.querySelectorAll(".fillerAnswer");
    let correctInputs = document.querySelectorAll(".correctAnswer");

    let missingFiller = Array.from(fillerInputs).some(input => !input.value.trim())
    let missingCorrect = Array.from(correctInputs).some(input => !input.value.trim())

    if(missingFiller && missingCorrect){
        alert("You are missing to fill inputs")
        return;
    }else{

    let fillerArray = [];
    fillerInputs.forEach(input => {
        fillerArray.push(input.value);
    });

    let correctArray = [];
    correctInputs.forEach(input => {
        correctArray.push(input.value);
    });

    let questionObject = {
        question: actualQuestion,
        fillerValues: fillerArray,
        correctValues: correctArray,
    };

    quizArray.push(questionObject);
    console.log(quizArray);

    addQuestion(quizArray);
    cleanInputs(question, fillerInputs, correctInputs);
    }
});

let scuffedCounter = 0;
function addQuestion(quizArray){
    let container = document.createElement("div");
    container.classList.add("questionBlock")
    
    let paragraph = document.createElement("p");
    paragraph.textContent = "Question is: " + quizArray[scuffedCounter].question + " Wrong answers are: " + quizArray[scuffedCounter].fillerValues + " Correct answer is: " + quizArray[scuffedCounter].correctValues;

    container.appendChild(paragraph)

    document.querySelector(".previewQuestionDiv").appendChild(container);
    scuffedCounter++;
}

let getCompleteQuizButton = document.getElementById("completeQuizButton")

getCompleteQuizButton.addEventListener("click", () => {

    console.log("Quiz array at save:", quizArray);

    let savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    savedQuizzes.push(quizArray)
    localStorage.setItem("quizzes", JSON.stringify(savedQuizzes));

    document.querySelector(".previewQuestionDiv").innerHTML = "";
});

function cleanInputs(question, filler, correct){
    question.value = "";
    filler.forEach(input => {
        input.value = "";
    });
    correct.forEach(input => {
        input.value = "";
    });

    [...filler].slice(1).forEach(input => input.remove());
    [...correct].slice(1).forEach(input => input.remove());
}

window.addEventListener("load",() =>{

    const circle = document.querySelector(".spotlight");
    let growRadius = 0;
    function loadAnimation(){
        growRadius = growRadius + 30;
        circle.style.setProperty("--r", growRadius + "px");

        if (growRadius < 1000) {
            requestAnimationFrame(loadAnimation);
        }else{
            circle.remove();
        }
}

    requestAnimationFrame(loadAnimation);
})