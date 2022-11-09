const apiKey = "ktTMXwypRJvdFKU0wYGlPaDazTWhSNyy";
const base = "http://dataservice.accuweather.com/";

const getWeather = async (id) => {
  const query = `currentconditions/v1/${id}?apikey=${apiKey}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0]
};

const getCity = async (city) => {
  const query = `locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};