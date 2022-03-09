const searchTemperature = () => {
  const inputField = document.getElementById("city-name").value;
  const API_KEY = "c6955eda6aac7ecb045b49b00f4c5c0b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setTemperature(data));
};

const showResult = (city, value) => {
  document.getElementById(city).innerText = value;
};

const setTemperature = (info) => {
  console.log(info);
  //   document.getElementById("city").innerText = info.name;
  showResult("city", info.name);
  showResult("temperature", info.main.temp);
  showResult("condition", info.weather[0].main);

  const url = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
