import React from 'react'
import CityInput from './CityInput'

class Weathers extends React.Component {
  state = {
    content: '',
    userInput: '',
  }

  handleContentChange = event => {
    const newContent = event.target.value

    this.setState({
      content: newContent
    })
  }

  saveCity = () => {
    const { userInput, content } = this.state

    this.setState({
      userInput: content,
      content: ''
    })
    console.log(content)
    
    async function getLongLat() {
      const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=998f1a85d7b145ea9f79f942c6814d02&q=${content}&pretty=1`)
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
        const weatherCelcius = `${content}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C`
        return weatherCelcius
    }
    
    getLongLat()
      .then(details => getWeather(details))
      .then(weatherCelcius => console.log(weatherCelcius));
  }

  render() {
    const { content, userInput }  = this.state

    return (
      <div className="Weather" >
        <h1>Weather App</h1>
        <CityInput
          content={content}
          userInput={userInput}
          handleContentChange={this.handleContentChange}
          saveCity={this.saveCity}
        />
      </div>
    )
  }
}

export default Weathers