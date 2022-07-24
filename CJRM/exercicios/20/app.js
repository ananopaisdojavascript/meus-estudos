/* 
  01
  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02
  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

setTimeout(() => {
  console.log("Um segundo e meio se passou desde que a página foi carregada")
}, 1500)


/* 
  03
  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const buttonInitCounter = document.querySelector(".button-init-counter");
const buttonStopCounter = document.querySelector(".button-stop-counter");
const counterContainer = document.querySelector(".counter-container");
let timer = null;

const startCounter = () => {
  const increment = Number(counterContainer.textContent) + 1;
  counterContainer.textContent = increment;
};


const stopCounter = () => {
  clearInterval(timer);
  counterContainer.textContent = 0;
};

buttonInitCounter.addEventListener("click", () => setInterval(startCounter, 1000))
buttonStopCounter.addEventListener("click", () => {
  stopCounter()
})