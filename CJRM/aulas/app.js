const getTasks = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;
    if (isRequestOk) {
      // Uso do JSON.parse() para converter o arquivo JSON em um vetor de objetos
      const data = JSON.parse(request.responseText);
      callback(null, data)
      return;
    }
    if (isRequestNotOk) {
      callback("Não foi possível obter os dados da API", null)
    }
  });
  request.open("GET", "./exemplo.json");
  request.send();
};

getTasks((error, data) => {
    console.log("Callback executado")

    if(error) {
        console.log(error)
        return
    }

    console.log(data)
});