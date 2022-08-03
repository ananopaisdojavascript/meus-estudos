const quiz = document.querySelector(".quiz");
const finalScoreContainer = document.querySelector(".final-score-container");
const correctAnswers = ["C", "C", "D", "C", "B", "B", "B", "B", "D", "D"];

let score = 0;

const getUserAnswers = () => correctAnswers.map((_, index) => {
  return quiz[`inputQuestion${index + 1}`].value;
});

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((answer, index) => {
    const isUserAnswerCorrect = answer === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 10;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  finalScoreContainer.classList.remove("displayNone");
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`;
  }, 10);
};

const resetUserScore = () => {
  score = 0;
}

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = getUserAnswers();
  resetUserScore();
  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
});
