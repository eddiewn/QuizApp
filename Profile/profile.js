const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const parent = document.getElementById("displayQuizDiv");


savedQuizzes.forEach((quizArray, quizIndex) => {

    const singularQuizDiv = document.createElement("div")
    const quizHeader = document.createElement("h2")
    quizHeader.textContent = "Quiz: " + (Number(quizIndex + 1));

    singularQuizDiv.appendChild(quizHeader);


    quizArray.forEach((questionObj, questionIndex) => {
        const displayQuiz = document.createElement("P");
        displayQuiz.textContent = "Question: " + questionObj.question + " Filler Answer: " + questionObj.fillerValues + " Correct Answer: " + questionObj.correctValues;
        singularQuizDiv.appendChild(displayQuiz);
        parent.appendChild(singularQuizDiv);
    });
});

