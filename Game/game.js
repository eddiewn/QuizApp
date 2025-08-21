let quizIndex = localStorage.getItem("playSelectedQuiz")
localStorage.removeItem("playSelectedQuiz");
let questionTracker = 0;

let quizzes = JSON.parse(localStorage.getItem('quizzes'));
let quiz = quizzes[quizIndex];

function game(quiz){
    quiz = shuffle(quiz);
    console.log("Game has started!");
    console.log(quiz)

	let mainTag = document.querySelector("main")

	let questionDiv = document.createElement("div");
	questionDiv.id = "questionDiv";

	let questionP = document.createElement("p");
	questionP.id = "questionP";

	let answerDiv = document.createElement("div");
	answerDiv.id = "answerDiv"


	questionP.innerText = quiz[questionTracker].question;

	questionDiv.appendChild(questionP);
	mainTag.appendChild(questionDiv);

		allAnswers(quiz).forEach(answer => {
		let answerSquare = document.createElement("div");
		answerSquare.className = "answerSquare";
		
		let answerSquareP = document.createElement("p");
		answerSquareP.innerText = answer;

		answerSquare.appendChild(answerSquareP)
		mainTag.appendChild(answerSquare);
	});


	console.log("AM i in loop???");
	console.log("answer: no");
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
