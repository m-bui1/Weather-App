import React from 'react'
import CityInput from './CityInput'
import WeatherList from './WeatherList'
import env from "react-dotenv";

const longlat = process.env.LONGLAT
const temp = process.env.TEMP


class Weathers extends React.Component {
  state = {
    content: '',
    userInput: '',
    weatherRes: []
  }

  handleContentChange = event => {
    const newContent = event.target.value

    this.setState({
      content: newContent
    })
  }

  saveCity = () => {
    const { userInput, content, weatherRes } = this.state
    

    this.setState({
      userInput: content,
      content: '',
    })
    console.log(content)
    
    async function getLongLat() {
      const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${longlat}&q=${content}&pretty=1`)
      .then(res => res.json())
      const lngData = res['results'][0]['geometry']['lng']
      const latData = res['results'][0]['geometry']['lat']
      const country = res['results'][0]['components']['country_code']
      const details = {lngData, latData, country}
      return details
    }
    
    
    async function getWeather(details) {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${details['latData']}&lon=${details['lngData']}&appid=${temp}`)
        .then(res => res.json())
        let arr = []
        const currentWeather = res['list'][0]['main']['temp']
        const currentDate = res['list'][0]['dt_txt']
        const currentWeather2 = res['list'][8]['main']['temp']
        const currentDate2 = res['list'][8]['dt_txt']
        const currentWeather3 = res['list'][16]['main']['temp']
        const currentDate3 = res['list'][16]['dt_txt']
        const currentWeather4 = res['list'][24]['main']['temp']
        const currentDate4 = res['list'][24]['dt_txt']
        const currentWeather5 = res['list'][32]['main']['temp']
        const currentDate5 = res['list'][32]['dt_txt']
        const weatherCelcius = `${content}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C
        ${currentDate2} is ${(currentWeather2 - 273.15).toFixed(2)} °C
        ${currentDate3} is ${(currentWeather3 - 273.15).toFixed(2)} °C
        ${currentDate4} is ${(currentWeather4 - 273.15).toFixed(2)} °C
        ${currentDate5} is ${(currentWeather5 - 273.15).toFixed(2)} °C
        `
        // obj[currentDate] = currentWeather
        // obj[currentDate2] = currentWeather2
        // obj[currentDate3] = currentWeather3
        // obj[currentDate4] = currentWeather4
        // obj[currentDate5] = currentWeather5
        arr.push([currentDate, `${(currentWeather - 273.15).toFixed(2)} °C`])
        arr.push([currentDate2, `${(currentWeather2 - 273.15).toFixed(2)} °C`])
        arr.push([currentDate3, `${(currentWeather3 - 273.15).toFixed(2)} °C`])
        arr.push([currentDate4, `${(currentWeather4 - 273.15).toFixed(2)} °C`])
        arr.push([currentDate5, `${(currentWeather5 - 273.15).toFixed(2)} °C`])
        return arr
    }
    
    getLongLat()
      .then(details => getWeather(details))
      .then(arr => this.setState({weatherRes: arr}))
  }

 

  render() {
    const { content, userInput, weatherRes }  = this.state

    return (
      <div className="Weather" >
        <h1>Weather App</h1>
        <CityInput
          content={content}
          userInput={userInput}
          handleContentChange={this.handleContentChange}
          saveCity={this.saveCity}
        />

        <WeatherList 
        weatherRes={weatherRes}/>
      </div>
    )
  }
}

export default Weathers