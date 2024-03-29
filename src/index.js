
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showCloud').text("")
}

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
    $('.showCloud').text(`The cloud condition is ${response.weather[0].description}.`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    makeApiCall(city);
    });
});




