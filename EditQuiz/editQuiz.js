const mainTag = document.querySelector("main")
const editNr = sessionStorage.getItem("editNr");
const savedQuizzes = JSON.parse(localStorage.getItem("quizzes"))
const header = document.createElement("h1");
const quiz = savedQuizzes[editNr]

console.log(quiz[0].question)

header.textContent = `You are now editing ${savedQuizzes[editNr][0].quizName}`;
mainTag.appendChild(header);
