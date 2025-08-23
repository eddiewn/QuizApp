let quizIndex = localStorage.getItem("playSelectedQuiz")
localStorage.removeItem("playSelectedQuiz");

let mainTag = document.querySelector("main")

let playerAnswers = [];

let questionTracker = 0;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));

let quiz = quizzes[quizIndex];
quiz = shuffle(quiz);

// Bug hittad
// Om "fillerValue" är samma som "correctValue" (även fast det är dumt)
// Så räknas fillerValue som ett korrekt val, vilket det borde vara. Kanske inte är något concern.
// Borde kolla specifikt ID istället för content på svar. yikes

function game(quiz){
	if(questionTracker != quiz.length){
		
		createGameDisplay();

		document.querySelectorAll(".answerSquare").forEach(square => {
			square.addEventListener("click", function() {
				const isCorrect = quiz[questionTracker].correctValues.some(correctAnswer => 
				square.textContent == correctAnswer
				);
				playerAnswers.push(square.textContent)

				if(isCorrect){
					
				}else{

				};
				
				document.querySelectorAll(".answerSquare").forEach(square => {

					if(quiz[questionTracker].correctValues.includes(square.textContent)){
					square.style.backgroundColor = "#90ee90";
					}else{
					square.style.backgroundColor = "#FF474C";
					}
				})

				createProgressBar();

				setTimeout(() => {
					questionTracker++
					mainTag.innerHTML = "";
					game(quiz);

				}, 3000);
			});
		});
	}else{
		createEndScreen();
	}
}

function createGameDisplay(){
	let questionDiv = document.createElement("div");
	questionDiv.id = "questionDiv";

	let questionP = document.createElement("p");
	questionP.id = "questionP";
	questionP.innerText = quiz[questionTracker].question;



	questionDiv.appendChild(questionP);
	mainTag.appendChild(questionDiv);

	let answerContainer = document.createElement("div");
	answerContainer.id = "answerContainer";

	let answerDiv = document.createElement("div");
	answerDiv.id = "answerDiv"
		
	const randomizedAnswers = fisherYatesShuffle(allAnswers(quiz));

	randomizedAnswers.forEach(answer => {
		console.log(answer);
		let answerSquare = document.createElement("div");
		answerSquare.className = "answerSquare";
		
		let answerSquareP = document.createElement("p");
		answerSquareP.innerText = answer;

		answerSquare.appendChild(answerSquareP);
		answerContainer.appendChild(answerSquare);
	});

	mainTag.appendChild(answerContainer);
}

function createProgressBar(){
	const nextQuestion = document.createElement("h1")
	const progressContainer = document.createElement("div");
	const progressBar = document.createElement("div");
	const progress = document.createElement("div");
				
	nextQuestion.id = "nextQuestion";
	nextQuestion.textContent = "Next question coming soon";
	progressContainer.id = "progressContainer";
	progressBar.id = "progressBar";
	progress.id = "progress";

	progressBar.appendChild(progress);
	progressContainer.appendChild(nextQuestion);
	progressContainer.appendChild(progressBar);
	mainTag.appendChild(progressContainer);
	let increaseWidth = 0;

	const progressMovement = setInterval(()=> {
		increaseWidth++;
		if(increaseWidth <= 100){
			progress.style.width = increaseWidth + "%";
		}else{
			clearInterval(progressMovement);
		}
	}, 30)
};

function createEndScreen(){
		const endScreenDiv = document.createElement("div")
		endScreenDiv.id = "endScreenDiv";
		
		const contentTest = document.createElement("h1");
		contentTest.textContent = "This is end page"

		endScreenDiv.appendChild(contentTest);
		mainTag.appendChild(endScreenDiv);

		//Printa ut frågan + vad spelaren svara
		// array.forEach(element => {
			
		// });
}

function shuffle(quiz){
    const shuffledQuestions = fisherYatesShuffle(quiz);

        return shuffledQuestions.map(q => {
        const shuffledCorrect = fisherYatesShuffle(q.correctValues)
        const shuffledFiller = fisherYatesShuffle(q.fillerValues)

        return {
            question: q.question,
            fillerValues: shuffledFiller,
            correctValues: shuffledCorrect,
        };
    });
}

function fisherYatesShuffle(array) {
	let arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
  	}
  	return arr;
}

function allAnswers(quiz){
	const allAnswers = [
	...quiz[questionTracker].fillerValues,
	...quiz[questionTracker].correctValues
	];

	return allAnswers;
}

game(quiz);
