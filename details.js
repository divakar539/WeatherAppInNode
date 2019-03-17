const fetch = require('node-fetch');
const apiKey = "6fcafada96ebd247c3441b32599977ec";

const getWeatherData = async (city) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        return error ;
      }
}

module.exports = {getWeatherData};