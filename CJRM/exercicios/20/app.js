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
const h1 = document.querySelector("h1");
let count = 0;

const startCounter = () => {
  h1.textContent = `${count}`;
  count++;
};


const stopCounter = () => {
  h1.textContent = `${count}`;
  count--;
  if(count === 0) {
    buttonStopCounter.setAttribute("disabled", "");
  } else {
    buttonStopCounter.removeAttribute("disabled");
  }
};

buttonInitCounter.addEventListener("click", startCounter)
buttonStopCounter.addEventListener("click", stopCounter)