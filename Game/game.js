let quizIndex = localStorage.getItem("playSelectedQuiz")
console.log(`I am now playing quiz ${quizIndex}`);
localStorage.removeItem("playSelectedQuiz");
let questionTracker = 0;

let quizzes = JSON.parse(localStorage.getItem('quizzes'));
let quiz = quizzes[quizIndex];

function game(quiz){
    quiz = shuffle(quiz);
    console.log("Game has started!");
    console.log(quiz)


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

game(quiz);
