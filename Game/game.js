import { 
  shuffle, 
  createProgressBar,
  createGameDisplay,
} from './utils.js';

import { createEndScreen } from './endscreen.js';

let quizIndex = localStorage.getItem("playSelectedQuiz")
localStorage.removeItem("playSelectedQuiz");

let mainTag = document.querySelector("main")

let playerAnswers = [];

let questionTracker = 0;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));

let quiz = quizzes[quizIndex];
quiz = shuffle(quiz);

// "Bug" hittad
// Om "fillerValue" är samma som "correctValue" (även fast det är dumt)
// Så räknas fillerValue som ett korrekt val, vilket det borde vara. Kanske inte är något concern.
// Borde kolla specifikt ID istället för content på svar. yikes


function game(quiz){
	if(questionTracker != quiz.length){
		
		createGameDisplay(quiz, questionTracker, mainTag);
		let clicked = false;
		document.querySelectorAll(".answerSquare").forEach(square => {
			square.addEventListener("click", function() {
				if(clicked) return;
				clicked = true;

				const isCorrect = quiz[questionTracker].correctValues.some(correctAnswer => 
				square.textContent == correctAnswer
				);
				playerAnswers.push(square.textContent)

				document.querySelectorAll(".answerSquare").forEach(square => {

					if(quiz[questionTracker].correctValues.includes(square.textContent)){
						square.style.backgroundColor = "#90ee90";
					}else{
						square.style.backgroundColor = "#FF474C";
					}
				})

				createProgressBar(mainTag);
				setTimeout(() => {
					questionTracker++
					mainTag.innerHTML = "";
					game(quiz);

				}, 3000);
			});
		});
	}else{
		createEndScreen(mainTag);
	}
}






game(quiz);

window.addEventListener("load",() =>{
    loadAnimation();
})