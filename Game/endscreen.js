export function createEndScreen(mainTag, quiz, playerAnswers) {
    // Räkna ut procenten av rätt o ge en rating berode på det. etc "S+!, A, B, C, D ,E ,F"
    const endScreenCard = document.createElement("article");
    endScreenCard.id = "endScreenCard";

    const cardHeader = document.createElement("h1");



    const answerDiv = document.createElement("div");
    answerDiv.id = "answerDiv";

    let answersRight = 0;
    quiz.forEach((question, i) => {
        const playerAnswer = playerAnswers[i];
        const isCorrect = question.correctValues.some(
            (answer) => answer === playerAnswer
        );
        if (isCorrect) {
            answersRight++;
        }

        endScreenCard.appendChild(answerDiv);
    });
    let percentage = answersRight / quiz.length * 100;

    if(percentage >= 70){
        cardHeader.textContent = "Well done!";
    }else{
        cardHeader.textContent = "Quiz Done!"
    }

    console.log(percentage + "%");

    endScreenCard.appendChild(cardHeader);
    mainTag.appendChild(endScreenCard);
}
