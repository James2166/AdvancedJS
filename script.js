const fiveDays = document.getElementById('fiveDays');
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let i = 0;
let d = new Date();
let day = d.getDay();
let today = true;

let apiWeather = {};
let apiKey = '4b80bcbb7c6eb9f19b80e22dc74e682d';

// Retrieves the current location
navigator.geolocation.getCurrentPosition((data) => {
    getWeather(data.coords.latitude, data.coords.longitude);
    console.log(data);
    console.log(data.coords);

    if (!position) {
        alert("We can't tell you the weather if we dont know where you are. Please allow us access to your location so we can give you the weather!")
    }
  });

// Calls OpenWeather Api
async function getWeather(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(apiUrl);
        apiWeather = await response.json();
        console.log(apiWeather);
        buildAllCards();
  
    } catch (error) {
        // Catch Error Here
    }
  };

// Determines the week day
const whichDay = function() {
    if (today) {
        today = false;
        return 'Today'
    } else {
        return weekDay[day]
    }
}

//Builds the Forecast Cards
function buildCards() {
    // The forcast cards the data will be displayed on
    const days = document.createElement('div');
    days.classList.add('days');
    const dayNames = document.createElement('h2');
    dayNames.textContent = whichDay();
    // Icon Container
    const icon = document.createElement('div');
    icon.classList.add('weather-icon');
    // The Icon
    const img = document.createElement('img');
    img.src = `http://openweathermap.org/img/w/${apiWeather.daily[i].weather[0].icon}.png`;
    img.alt = 'Weather Icon';
    //Temperature
    const temp = document.createElement('div');
    temp.classList.add('temp');
    const max = document.createElement('p');
    max.classList.add('max');
    max.textContent = Math.round(apiWeather.daily[i].temp.max) + '°';
    const min = document.createElement('p');
    min.classList.add('min');
    min.textContent = Math.round(apiWeather.daily[i].temp.min) + '°';
    //Append
    temp.append(max, min);
    icon.appendChild(img);
    days.append(dayNames, icon, temp);
    fiveDays.appendChild(days);

}

function buildAllCards() {
    for(a = 0; a < 5; a++) {
        buildCards();
        
        if (day < 6) {
            day++;
            i++;
        } else {
            day = 0
            day++;
            i++;
        }
    }
}
