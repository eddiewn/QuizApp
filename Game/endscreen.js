export function createEndScreen(mainTag, quiz, playerAnswers) {
    // Räkna ut procenten av rätt o ge en rating berode på det. etc "S+!, A, B, C, D ,E ,F"
    const endScreenCard = document.createElement("article");
    endScreenCard.id = "endScreenCard";

    const cardHeader = document.createElement("h1");

    const scoreDiv = document.createElement("div");
    scoreDiv.id = "scoreDiv";

    const leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";

    const rightDiv = document.createElement("div");
    rightDiv.id = "rightDiv";

    const scoreText = document.createElement("h2");
    scoreText.id = "scoreText";

    const scoreTextTwo = document.createElement("p");
    scoreTextTwo.id = "scoreTextTwo"

    leftDiv.appendChild(scoreText);
    leftDiv.appendChild(scoreTextTwo);
    scoreDiv.appendChild(leftDiv);
    scoreDiv.appendChild(rightDiv)

    const cardNav = document.createElement("nav");
    cardNav.id = "cardNav";
    const tryAgainButton = document.createElement("button");
    tryAgainButton.id = "tryAgainButton";
    tryAgainButton.textContent = "Try Again!";

    const homeButton = document.createElement("button");
    homeButton.id = "homeButton";
    homeButton.textContent = "Home";

    const shareButton = document.createElement("button");
    shareButton.id = "shareButton";
    shareButton.textContent = "Share results!"

    cardNav.append(tryAgainButton, homeButton, shareButton);

    const answerDiv = document.createElement("div");
    answerDiv.id = "answerDiv";

    const answerDivHeader = document.createElement("p")
    answerDivHeader.textContent = "Your Answers";
    answerDiv.appendChild(answerDivHeader);

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
                answerDiv.appendChild(greenCheckmark);
            }
            if (i == 3) {
                const viewAllButton = document.createElement("button");
                viewAllButton.textContent = "View all";
                answerDiv.appendChild(viewAllButton);
            }
        } else {
            if (i < 3) {
                const redError = document.createElement("img");
                redError.src = "../images/error-10376.png";
                answerDiv.appendChild(redError);
            }
            if (i == 3) {
                const viewAllButton = document.createElement("button");
                viewAllButton.textContent = "View all";
                answerDiv.appendChild(viewAllButton);
            }
        }
    });

    let percentage = Math.round((answersRight / quiz.length) * 100);
    if (percentage >= 70) {
        cardHeader.textContent = "Well done!";
        scoreTextTwo.textContent = "Great job!";
    } else {
        cardHeader.textContent = "Quiz Done!";
        scoreTextTwo.textContent = "Its ok!";

    }

    console.log(percentage + "%");

    scoreText.textContent = `${answersRight}/${quiz.length}`

    endScreenCard.appendChild(cardHeader);
    endScreenCard.appendChild(scoreDiv);
    endScreenCard.appendChild(answerDiv);
    endScreenCard.appendChild(cardNav);
    mainTag.appendChild(endScreenCard);
}
