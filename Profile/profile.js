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
    const playButton = document.createElement("button");

    playButton.innerText = "Play Quiz!"
    playButton.className = "playQuiz";
    playButton.id = `playButtonFor${quizIndex}`;

    quizHeader.textContent = "Quiz: " + (Number(quizIndex));

    const removeButton = document.createElement("button");
    removeButton.innerText = "Delete";
    removeButton.className = "removeQuiz";
    removeButton.id = `buttonForQuiz${quizIndex}`;

    singularQuizDiv.appendChild(quizHeader);
    singularQuizDiv.appendChild(playButton);
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
    let quizIndex = event.target.id.slice(-1);

  if (event.target.classList.contains("removeQuiz")) {
    quizIndex = parseInt(quizIndex);

    savedQuizzes = savedQuizzes.filter((_, i) => i !== quizIndex);

    console.log(savedQuizzes);

    localStorage.setItem("quizzes", JSON.stringify(savedQuizzes));

    loadQuizzes();
    }

    
    if (event.target.classList.contains("playQuiz")){
        localStorage.setItem("playSelectedQuiz", quizIndex);
        window.location.href="../Game/game.html";
    }
});

loadQuizzes();
