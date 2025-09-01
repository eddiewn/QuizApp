export function shuffle(quiz){
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

export function fisherYatesShuffle(array) {
	let arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
  	}
  	return arr;
}

export function allAnswers(quiz, questionTracker){
	const allAnswers = [
	...quiz[questionTracker].fillerValues,
	...quiz[questionTracker].correctValues
	];

	return allAnswers;
}

export function createProgressBar(mainTag){
	const progressContainer = document.createElement("div");
	const progressBar = document.createElement("div");
	const progress = document.createElement("div");
				
	progressContainer.id = "progressContainer";
	progressBar.id = "progressBar";
	progress.id = "progress";

	progressBar.appendChild(progress);
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

export function createGameDisplay(quiz, questionTracker, mainTag){
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
		
	const randomizedAnswers = fisherYatesShuffle(allAnswers(quiz, questionTracker));

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
