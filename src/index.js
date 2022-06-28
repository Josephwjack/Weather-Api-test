
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let promiseWeMade = new Promise(function(ifTrue, ifFalse){
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`     

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

    promiseWeMade.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${body.main.temp} degrees.`);
      $('.showCloud').text(`The cloud condition is ${body.weather[0].description}.`);
      $('.showErrors').text("");
      }, 
      function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
        $('.showHumidity').text("");
        $('.showTemp').text("");
        $('.showCloud').text("");
    });
  });
});
