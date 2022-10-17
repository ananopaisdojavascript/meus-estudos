const form = document.querySelector("form");
const container = document.querySelector(".out");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputValue = event.target.search.value;
  const giphyApiKey = "RVqJ6GyRsIlpKQXnDF0kejhgsSZ9nC7M";
  const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${inputValue}`;
  
  try {
    const response = await fetch(giphyApiUrl)
    if(!response.ok) {
        throw new Error("Não foi possível obter os dados")
    }
    const gifData = await response.json()
    const image = gifData.data[0].images.downsized.url
    const title = gifData.data[0].title
    const img = document.createElement("img")
    img.setAttribute("src", image)
    img.setAttribute("alt", title)
    container.insertAdjacentElement("afterbegin", img)
    console.log(title)
    console.log(image)
    console.log(gifData)
  
  } catch (error) {
    alert(error.message)
  }
  form.reset();
});
