var questionsArray = []; 

var correctParent = document.getElementById("correctAnswerDiv");
var fillerParent = document.getElementById("fillerAnswerDiv");

var getFiller = document.getElementById("addFillerAnswerButton");
var getCorrect = document.getElementById("addCorrectAnswerButton");


getFiller.addEventListener("click", () => {
    const newInput =  document.createElement("INPUT");
    newInput.className = "fillerAnswer";
    newInput.setAttribute("type", "text");
    fillerParent.appendChild(newInput);
    fillerParent.appendChild(document.createElement("br"));
});

getCorrect.addEventListener("click", () => {
    const newInput = document.createElement("INPUT");
    newInput.className = "correctAnswer";
    newInput.setAttribute("type", "text");
    correctParent.appendChild(newInput);
    correctParent.appendChild(document.createElement("br"));
})

var getSubmitButton = document.getElementById("submitQuestionButton");
var question = document.getElementById("question");

getSubmitButton.addEventListener("click", () => {
    var actualQuestion = question.value;

    var fillerInputs = document.querySelectorAll(".fillerAnswer");
    var fillerArray = [];
    fillerInputs.forEach(input => {
        fillerArray.push(input.value);
    });

    var correctInputs = document.querySelectorAll(".correctAnswer");
    var correctArray = [];
    correctInputs.forEach(input => {
        correctArray.push(input.value);
    });


    var questionObject = {
    question: actualQuestion,
    fillerValues: fillerArray,
    correctValues: correctArray,
    };

    questionsArray.push(questionObject);
    console.log(questionsArray);
});
