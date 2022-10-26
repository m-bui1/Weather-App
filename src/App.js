import './App.css';
import React from 'react';
import Weathers from './Weathers';

function App() {
  return (
    <div className="App">
        <Weathers />
    </div>
  )
}

// class App extends React.Component {
//   state = {
//     userInput: [],
//     content: ''
//   }

//   handleCityChange = event => {
//     const newCity = event.target.value

//     this.setState({
//       content: newCity
//     })
//   }

//   saveCity = () => {
//     const {content, userInput} = this.state 
//     this.setState({
//       userInput: [content],
//       content: ''
//     })
//     console.log(userInput)
//   }

//   getLongLat = () => {
//     const res = fetch(`https://api.opencagedata.com/geocode/v1/json?key=${longlat}&q=${this.userInput}&pretty=1`)
//     .then(res => res.json())
//     const lngData = res['results'][0]['geometry']['lng']
//     const latData = res['results'][0]['geometry']['lat']
//     const country = res['results'][0]['components']['country_code']
//     const details = {lngData, latData, country}
//     return details
//   }

//   getWeather = (details) => {
//     const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${details['latData']}&lon=${details['lngData']}&appid=${temp}`)
//     .then(res => res.json())
//     const currentWeather = res['main']['temp']
//     const weatherCelcius = `${this.userInput}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C`
//     return weatherCelcius
//   }

//   getWeatherData = event => {
//     this.setState({
//       userInput: event.target.value
//     })
//     console.log(event.target.value)
//     console.log(this.userInput)
//     this.getLongLat()
//       .then(details => this.getWeather(details))
//       .then(weatherCelcius => console.log(weatherCelcius));
//   }
//   render() {
//     return(
//       <div className="App">
//         <WeatherCalc 
//         handleCityChange = {this.handleCityChange}
//         content = {this.state.content}
//         userInput = {this.state.userInput}
//         getLongLat = {this.getLongLat}
//         getWeather = {this.getWeather}
//         getWeatherData = {this.getWeatherData}
//         saveCity = {this.saveCity}
//         />
//       </div>
//     )
//   }
// }

export default App;
