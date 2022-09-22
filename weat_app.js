const loader = document.querySelector('.wrapper');
window.onload= function(){
    setTimeout(function(){
        loader.style.opacity = "0"
        setTimeout(function(){
            loader.style.display = "none"
        },500)
    },2500)
}



const api = 'ae0ac2eb2bd89f832a7342955fae8f6f';

// longitude data and latitude data

let long, lat;
let temp = document.querySelector('.temp');
let loc = document.querySelector('.location');
let icon= document.querySelector('.icon');
let humid = document.querySelector('.humidity');
let wind = document.querySelector('.wind')
const kelvin = 273;

window.addEventListener('load',() => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`
      console.log(base);
      fetch(base)
        .then((response) => {return response.json()})
        .then((data) => {
          console.log(data);
          temp.textContent = Math.floor(data.main.temp - kelvin)+'°C';
          loc.textContent = data.name;
          if(data.weather[0].main == 'Rain' || data.weather[0].main == 'rain'){
            icon.innerHTML = `<img src="Image/rain.gif" alt="rain" style='height:120px'>`
          }
          else{
            icon.innerHTML = `<img src="Image/cloudy.gif" alt="clear" style='height:120px'>`

          }
          humid.textContent = "Humidity = "+data.main.humidity+'%'
          wind.textContent = 'Wind speed = '+data.wind.speed + 'm/s'
        })
      
    })
  }
})
let wea = document.querySelector('.weather');
setTimeout(() => {
  wea.style.opacity = 100;
}, 2900);
setTimeout(() => {
  wea.style.boxShadow = '8px 8px 40px rgba(0, 0, 0, 0.247)';
}, 3000);