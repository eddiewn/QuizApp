let savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];


function loadQuizzes(){
    let mainTag = document.querySelector("main")
    mainTag.innerHTML = ""; 

savedQuizzes.forEach((quizArray, quizIndex) => {

    const parentDiv = document.createElement("div")
    parentDiv.id = "displayQuizDiv";

    mainTag.appendChild(parentDiv);

    const singularQuizDiv = document.createElement("div");
    const quizHeader = document.createElement("h2");
    quizHeader.textContent = "Quiz: " + (Number(quizIndex + 1));

    const removeButton = document.createElement("button");
    removeButton.innerText = "test";
    removeButton.className = "removeQuiz";
    removeButton.id = `buttonForQuiz${quizIndex}`;

    singularQuizDiv.appendChild(quizHeader);
    singularQuizDiv.appendChild(removeButton);

    quizArray.forEach((questionObj, questionIndex) => {
        const displayQuiz = document.createElement("P");
        displayQuiz.textContent = "Question: " + questionObj.question + " Filler Answer: " + questionObj.fillerValues + " Correct Answer: " + questionObj.correctValues;

        singularQuizDiv.appendChild(displayQuiz);
        parentDiv.appendChild(singularQuizDiv);
    });
});



}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeQuiz')) {
    let quizIndex = event.target.id.slice(-1);
    quizIndex = parseInt(quizIndex);

    savedQuizzes = savedQuizzes.filter((_, i) => i !== quizIndex);

    console.log(savedQuizzes);

    localStorage.setItem('quizzes', JSON.stringify(savedQuizzes));

    loadQuizzes();
  }
});

loadQuizzes();
