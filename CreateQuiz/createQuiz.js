let questionsArray = []; 

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
    let fillerArray = [];
    fillerInputs.forEach(input => {
        fillerArray.push(input.value);
    });

    let correctInputs = document.querySelectorAll(".correctAnswer");
    let correctArray = [];
    correctInputs.forEach(input => {
        correctArray.push(input.value);
    });


    let questionObject = {
    question: actualQuestion,
    fillerValues: fillerArray,
    correctValues: correctArray,
    };

    questionsArray.push(questionObject);
    console.log(questionsArray);


    addQuestion(questionsArray);

});


    let scuffedCounter = 0;
function addQuestion(questionsArray){
    let container = document.createElement("div");
    container.classList.add("questionBlock")
    
    let paragraph = document.createElement("p");
    paragraph.textContent = "Question is: " + questionsArray[scuffedCounter].question + " Wrong answers are: " + questionsArray[scuffedCounter].fillerValues + " Correct answer is: " + questionsArray[scuffedCounter].correctValues;

    container.appendChild(paragraph)

    document.querySelector(".previewQuestionDiv").appendChild(container);
    scuffedCounter++;

}
