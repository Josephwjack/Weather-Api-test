export default class WeatherService {
  static getWeather(city) {
    return new Promise(function(ifTrue, ifFalse) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`;
      request.onload = function () {
        if (this.status === 200) {
          ifTrue(request.response);
        } else {
          ifFalse(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}