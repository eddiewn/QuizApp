const mainTag = document.querySelector("main")
const editNr = sessionStorage.getItem("editNr");
const savedQuizzes = JSON.parse(localStorage.getItem("quizzes"))
const header = document.createElement("h1");
const quiz = savedQuizzes[editNr]

console.log(quiz[0].question)

header.textContent = `You are now editing ${savedQuizzes[editNr][0].quizName}`;
mainTag.appendChild(header);

    const quizDiv = document.createElement("div");
function printQuestions() {
    quiz.forEach(question => {
        console.log(question)
        const questionSection = document.createElement("section");


        const questionP = document.createElement("p");
        questionP.textContent = "Edit Question:"

        const questionInput = document.createElement("input");
        questionInput.value = question.question

        questionSection.appendChild(questionP)
        questionSection.appendChild(questionInput);

        const correctAnswerP = document.createElement("p");
        correctAnswerP.textContent = "Edit Correct Answer:";
        question.correctValues.forEach(() => {
            const correctAnswerInput = document.createElement("input");
            correctAnswerInput.value = question.correctValues;

            questionSection.appendChild(correctAnswerP)
            questionSection.append(correctAnswerInput);

        });

        const fillerAnswerP = document.createElement("p");
        fillerAnswerP.textContent = "Edit Wrong Answer:";
        question.fillerValues.forEach(() => {


            const fillerAnswerInput = document.createElement("input");
            fillerAnswerInput.value = question.fillerValues;

            questionSection.appendChild(fillerAnswerP)
            questionSection.append(fillerAnswerInput);
        });






        mainTag.appendChild(questionSection)

    });
}

printQuestions();