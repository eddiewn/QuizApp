let savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
let mainTag = document.querySelector("main")

function loadQuizzes(){
    mainTag.innerHTML = ""; 

    const parentDiv = document.createElement("div")
    parentDiv.id = "displayQuizDiv";
    savedQuizzes.forEach((quizArray, quizIndex) => {

        mainTag.appendChild(parentDiv);

        const singularQuizDiv = document.createElement("div");
        singularQuizDiv.className = "singularQuizDiv";

        const quizHeader = document.createElement("h2");
        const quizDescription = document.createElement("p");
        quizHeader.textContent = `Quiz: ${quizArray[0].quizName}`;
        quizDescription.textContent = `Quiz: ${quizArray[0].quizDescription}`

        const playButton = document.createElement("button");
        playButton.innerText = "Play Quiz!"
        playButton.className = "playQuiz";
        playButton.id = `playButtonFor${quizIndex}`;

        const editButton = document.createElement("button");
        editButton.innerText = "Edit Quiz";
        editButton.className = "editQuiz";
        editButton.id = `editButtonFor${quizIndex}`

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove Quiz";
        removeButton.className = "removeQuiz";
        removeButton.id = `buttonForQuiz${quizIndex}`;

        singularQuizDiv.appendChild(quizHeader);
        singularQuizDiv.appendChild(quizDescription);

        singularQuizDiv.appendChild(playButton);
        singularQuizDiv.appendChild(editButton);
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
    if(event.target.classList.contains("playQuiz")){
        localStorage.setItem("playSelectedQuiz", quizIndex);
        deloadAnimation("../Game/game.html");
    }

    if(event.target.classList.contains("removeQuiz")) {
        quizIndex = parseInt(quizIndex);

        savedQuizzes = savedQuizzes.filter((_, i) => i !== quizIndex);

        console.log(savedQuizzes);

        localStorage.setItem("quizzes", JSON.stringify(savedQuizzes));

        loadQuizzes();
    }

    if(event.target.classList.contains("editQuiz")){
        sessionStorage.setItem("editNr", quizIndex)
        deloadAnimation("../EditQuiz/editQuiz.html");
    }

    

});

loadQuizzes();

window.addEventListener("load",() =>{
    loadAnimation();
})
