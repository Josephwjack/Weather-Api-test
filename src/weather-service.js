export default class WeatherService {
  static async getWeather(city) {
    try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`)
        if (!response.ok) {
          throw Error(response.statusText);
        } 
        return response.json();
        } catch(error) {
        return error.message;
    }
  }
}