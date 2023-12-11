
document.addEventListener('DOMContentLoaded', function() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    var apiKey = '00eb53f7cd5b3fb2db9c119f749e4479';
    var city = 'Toronto'; 

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           
            var temperature = data.main.temp;
            var description = data.weather[0].description;

           
            document.getElementById('weather').innerHTML = '<p>Current Weather: ' + description + ', Temperature: ' + temperature + '°C</p>';
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
        });
});