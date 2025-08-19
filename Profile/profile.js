const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const parent = document.getElementById("displayQuizDiv");


for (let index = 0; index < savedQuizzes.length; index++) {
    let quizDiv = document.createElement("div");
    let displayQuiz = document.createElement("p");
    displayQuiz.textContent = savedQuizzes[index].correctValues + savedQuizzes[index].question + savedQuizzes[index].fillerValues + " || ";
    quizDiv.appendChild(displayQuiz)
    parent.appendChild(quizDiv)

}




