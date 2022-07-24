const quiz = document.querySelector(".quiz");
const result = document.querySelector(".result");
const correctAnswers = ["C", "C", "D", "C", "B", "B", "B", "B", "D", "D"];

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const userAnswers = [
    quiz.inputQuestion1.value,
    quiz.inputQuestion2.value,
    quiz.inputQuestion3.value,
    quiz.inputQuestion4.value,
    quiz.inputQuestion5.value,
    quiz.inputQuestion6.value,
    quiz.inputQuestion7.value,
    quiz.inputQuestion8.value,
    quiz.inputQuestion9.value,
    quiz.inputQuestion10.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });
  scrollTo(0, 0);
  result.classList.remove("displayNone");
  let counter = 0;
  const timer = setInterval(() => {
    if(counter === score) {
        clearInterval(timer);
    }
    result.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 10);
});
