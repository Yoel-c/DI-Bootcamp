const city = document.getElementById("city")
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74"


const xhr = new XMLHttpRequest();

xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`);

xhr.send();


