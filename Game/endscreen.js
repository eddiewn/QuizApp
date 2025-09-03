export function createEndScreen(mainTag, quiz, playerAnswers) {
    // Räkna ut procenten av rätt o ge en rating berode på det. etc "S+!, A, B, C, D ,E ,F"
    const endScreenCard = document.createElement("article");
    endScreenCard.id = "endScreenCard";

    const cardHeader = document.createElement("h1");
    const cardScoreDiv = document.createElement("div");

    const scoreDiv = document.createElement("div");
    scoreDiv.id = "scoreDiv";

    let answersRight = 0;
    quiz.forEach((question, i) => {
        const playerAnswer = playerAnswers[i];
        const isCorrect = question.correctValues.some(
            (answer) => answer === playerAnswer
        );
        if (isCorrect) {
            answersRight++;
            if (i < 3) {
                const greenCheckmark = document.createElement("img");
                greenCheckmark.src = "../images/greenCheckmark.png";
                scoreDiv.appendChild(greenCheckmark);
            }
            if (i == 3) {
                const viewAllButton = document.createElement("button");
                viewAllButton.textContent = "View all";
                scoreDiv.appendChild(viewAllButton);
            }
        } else {
            if (i < 3) {
                const redError = document.createElement("img");
                redError.src = "../images/error-10376.png";
                scoreDiv.appendChild(redError);
            }
            if (i == 3) {
                const viewAllButton = document.createElement("button");
                viewAllButton.textContent = "View all";
                scoreDiv.appendChild(viewAllButton);
            }
        }
    });

    let percentage = Math.round((answersRight / quiz.length) * 100);
    if (percentage >= 70) {
        cardHeader.textContent = "Well done!";
    } else {
        cardHeader.textContent = "Quiz Done!";
    }

    console.log(percentage + "%");

    endScreenCard.appendChild(cardHeader);
    endScreenCard.appendChild(scoreDiv);
    mainTag.appendChild(endScreenCard);
}
