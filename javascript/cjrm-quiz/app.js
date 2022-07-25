const quiz = document.querySelector(".quiz");
const finalScoreContainer = document.querySelector(".final-score-container");
const correctAnswers = ["C", "C", "D", "C", "B", "B", "B", "B", "D", "D"];

let score = 0;

const getUserAnswers = () => {
  let userAnswers = [];

  correctAnswers.forEach((_, index) => {
    const userAnswer = quiz[`inputQuestion${index + 1}`].value;
    userAnswers.push(userAnswer);
  });
  return userAnswers;
};

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
    behavior: 'smooth'
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

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = getUserAnswers();
  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
});
