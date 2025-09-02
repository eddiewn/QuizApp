export function createEndScreen(mainTag, quiz, playerAnswers) {
    // Räkna ut procenten av rätt o ge en rating berode på det. etc "S+!, A, B, C, D ,E ,F"
    const endScreenDiv = document.createElement("div");
    endScreenDiv.id = "endScreenDiv";

    const contentTest = document.createElement("h1");
    contentTest.textContent = "This is end page";

    endScreenDiv.appendChild(contentTest);
    mainTag.appendChild(endScreenDiv);

    //Printa ut frågan + vad spelaren svara

    const answerDiv = document.createElement("div");
    answerDiv.id = "answerDiv";

    quiz.forEach((question, i) => {
        const playerAnswer = playerAnswers[i];
        const isCorrect = question.correctValues.some(
            (answer) => answer === playerAnswer
        );

        const playerAnswerP = document.createElement("p");
        const correctAnswerP = document.createElement("p");

        playerAnswerP.textContent = `You answered: ${playerAnswer}`;
        correctAnswerP.textContent = `Correct answer is: ${question.correctValues}`;

        answerDiv.appendChild(playerAnswerP);
        answerDiv.appendChild(correctAnswerP);
        endScreenDiv.appendChild(answerDiv);

        if (isCorrect) {
            // console.log(`${question.question} answered correctly`);
        } else {
            // console.log(`${question.question} answered wrongly`);
        }
    });
}
