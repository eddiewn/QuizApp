let quizIndex = localStorage.getItem("playSelectedQuiz")
localStorage.removeItem("playSelectedQuiz");
let questionTracker = 0;

let quizzes = JSON.parse(localStorage.getItem('quizzes'));
let quiz = quizzes[quizIndex];


// SHUFFLE FUNKAR INTE, ALERT SHUFFLE FUNKAR INTE!!!!!
// Den shufflar alla svar men PGA hur jag printar ur det,
//  så kommer correct alltid vara det sista alternativet.

// För att lösa detta antingen shuffla alla i EN array,
//  så correctAnswer kan ligga bara random i mitten.

// Eller randomiza hur den printar ut svaren i spelet.



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

	let answerContainer = document.createElement("div");
	answerContainer.id = "answerContainer";

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

document.querySelectorAll(".answerSquare").forEach(square => {
	square.addEventListener("click", function() {
	const isCorrect = quiz[questionTracker].correctValues.some(correctAnswer => 
      	square.textContent == correctAnswer
	);

			if(isCorrect){
				alert("You pressed the correct answer");
			}else{
				alert("You pressed the wrong answer");
			};

			document.querySelectorAll(".answerSquare").forEach(square => {

				if(quiz[questionTracker].correctValues.includes(square.textContent)){
				square.style.backgroundColor = "#90ee90";
				}else{
				square.style.backgroundColor = "#FF474C";
				}
			})

	});
});



	console.log("Am I in loop??");
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
