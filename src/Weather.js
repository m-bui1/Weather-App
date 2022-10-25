import fetch from 'node-fetch'

// let userInput = document.querySelector('.city').value
let cityButton = document.querySelector('.cityButton')

cityButton.addEventListener('click', event => {
  event.preventDefault()
  let userInput = document.querySelector('.city').value
  getLongLat(userInput)
})


if(userInput == undefined){
  userInput = 'Melbourne'
}


async function getLongLat(userInput) {
  const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=998f1a85d7b145ea9f79f942c6814d02&q=${userInput}&pretty=1`)
  .then(res => res.json())
  const lngData = res['results'][0]['geometry']['lng']
  const latData = res['results'][0]['geometry']['lat']
  const country = res['results'][0]['components']['country_code']
  const details = {lngData, latData, country}
  return details
}


async function getWeather(details) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${details['latData']}&lon=${details['lngData']}&appid=6e8396020df9df12c8c1cd45eb68481f`)
    .then(res => res.json())
    const currentWeather = res['main']['temp']
    const weatherCelcius = `${userInput}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C`
    return weatherCelcius
}

getLongLat()
  .then(details => getWeather(details))
  .then(weatherCelcius => console.log(weatherCelcius));