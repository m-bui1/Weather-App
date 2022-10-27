import React from 'react'
import CityInput from './CityInput'
import WeatherList from './WeatherList'
import env from "react-dotenv";
import { WiDaySunny } from "weather-icons-react";

class Weathers extends React.Component {
  state = {
    content: '',
    userInput: '',
    weatherRes: [],
    weatherInverse: []
  }

  handleContentChange = event => {
    const newContent = event.target.value

    this.setState({
      content: newContent
    })
  }
  // default city onclick button
  
  // defaultCities = event => {
  //   const { userInput, content, weatherRes } = this.state
  //   this.setState({
  //     content: ()
  //   })
  //   // let buttons = document.querySelectorAll('.Cities')
  //   // buttons.forEach(button => {
  //   //   button.addEventListener('click', (event) => {
  //   //   const newContent = event.target.textContent
  //   //   console.log(newContent)
  //   //   })
  //   // })
    
  //   async function getLongLat() {
  //     const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_LONGLAT}&q=${content}&pretty=1`)
  //     .then(res => res.json())
  //     const lngData = res['results'][0]['geometry']['lng']
  //     const latData = res['results'][0]['geometry']['lat']
  //     const country = res['results'][0]['components']['country_code']
  //     const details = {lngData, latData, country}
  //     return details
  //   }
    
  //   async function getWeather(details) {
  //     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${details['latData']}&lon=${details['lngData']}&appid=${process.env.REACT_APP_TEMP}`)
  //       .then(res => res.json())
  //       let arr = []
  //       const city = res['city']['name']
  //       const currentWeather = res['list'][0]['main']['temp']
  //       const currentDate = res['list'][0]['dt_txt']
  //       const currentIcon = res['list'][0]['weather'][0]['icon']
  //       const weatherDesc = res['list'][0]['weather'][0]['description']
  //       const currentWeather2 = res['list'][8]['main']['temp']
  //       const currentDate2 = res['list'][8]['dt_txt']
  //       const currentIcon2 = res['list'][8]['weather'][0]['icon']
  //       const weatherDesc2 = res['list'][8]['weather'][0]['description']
  //       const currentWeather3 = res['list'][16]['main']['temp']
  //       const currentDate3 = res['list'][16]['dt_txt']
  //       const currentIcon3 = res['list'][16]['weather'][0]['icon']
  //       const weatherDesc3 = res['list'][16]['weather'][0]['description']
  //       const currentWeather4 = res['list'][24]['main']['temp']
  //       const currentDate4 = res['list'][24]['dt_txt']
  //       const currentIcon4 = res['list'][24]['weather'][0]['icon']
  //       const weatherDesc4 = res['list'][24]['weather'][0]['description']
  //       const currentWeather5 = res['list'][32]['main']['temp']
  //       const currentDate5 = res['list'][32]['dt_txt']
  //       const currentIcon5 = res['list'][32]['weather'][0]['icon']
  //       const weatherDesc5 = res['list'][32]['weather'][0]['description']
  //       const weatherCelcius = `${content}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C
  //       ${currentDate2} is ${(currentWeather2 - 273.15).toFixed(2)} °C
  //       ${currentDate3} is ${(currentWeather3 - 273.15).toFixed(2)} °C
  //       ${currentDate4} is ${(currentWeather4 - 273.15).toFixed(2)} °C
  //       ${currentDate5} is ${(currentWeather5 - 273.15).toFixed(2)} °C
  //       `

  //       arr.push([currentDate, `${(currentWeather - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc, currentIcon])
  //       arr.push([currentDate2, `${(currentWeather2 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc2, currentIcon2])
  //       arr.push([currentDate3, `${(currentWeather3 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc3, currentIcon3])
  //       arr.push([currentDate4, `${(currentWeather4 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc4, currentIcon4])
  //       arr.push([currentDate5, `${(currentWeather5 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc5, currentIcon5])

  //       return arr
  //   }
    
  //   getLongLat()
  //     .then(details => getWeather(details))
  //     .then(arr => this.setState({weatherRes: arr}))
  // }

  saveCity = () => {
    const { userInput, content, weatherRes } = this.state
    this.setState({
      userInput: content
    })
    console.log(content)
    
    async function getLongLat() {
      const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_LONGLAT}&q=${content}&pretty=1`)
      .then(res => res.json())
      const lngData = res['results'][0]['geometry']['lng']
      const latData = res['results'][0]['geometry']['lat']
      const country = res['results'][0]['components']['country_code']
      const details = {lngData, latData, country}
      return details
    }
    
    async function getWeather(details) {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${details['latData']}&lon=${details['lngData']}&appid=${process.env.REACT_APP_TEMP}`)
        .then(res => res.json())
        let arr = []
        const city = res['city']['name']
        const currentWeather = res['list'][0]['main']['temp']
        const currentDate = res['list'][0]['dt_txt']
        const currentIcon = res['list'][0]['weather'][0]['icon']
        const weatherDesc = res['list'][0]['weather'][0]['description']
        const currentWeather2 = res['list'][8]['main']['temp']
        const currentDate2 = res['list'][8]['dt_txt']
        const currentIcon2 = res['list'][8]['weather'][0]['icon']
        const weatherDesc2 = res['list'][8]['weather'][0]['description']
        const currentWeather3 = res['list'][16]['main']['temp']
        const currentDate3 = res['list'][16]['dt_txt']
        const currentIcon3 = res['list'][16]['weather'][0]['icon']
        const weatherDesc3 = res['list'][16]['weather'][0]['description']
        const currentWeather4 = res['list'][24]['main']['temp']
        const currentDate4 = res['list'][24]['dt_txt']
        const currentIcon4 = res['list'][24]['weather'][0]['icon']
        const weatherDesc4 = res['list'][24]['weather'][0]['description']
        const currentWeather5 = res['list'][32]['main']['temp']
        const currentDate5 = res['list'][32]['dt_txt']
        const currentIcon5 = res['list'][32]['weather'][0]['icon']
        const weatherDesc5 = res['list'][32]['weather'][0]['description']
        const weatherCelcius = `${content}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C
        ${currentDate2} is ${(currentWeather2 - 273.15).toFixed(2)} °C
        ${currentDate3} is ${(currentWeather3 - 273.15).toFixed(2)} °C
        ${currentDate4} is ${(currentWeather4 - 273.15).toFixed(2)} °C
        ${currentDate5} is ${(currentWeather5 - 273.15).toFixed(2)} °C
        `

        arr.push([currentDate, `${(currentWeather - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc, currentIcon])
        arr.push([currentDate2, `${(currentWeather2 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc2, currentIcon2])
        arr.push([currentDate3, `${(currentWeather3 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc3, currentIcon3])
        arr.push([currentDate4, `${(currentWeather4 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc4, currentIcon4])
        arr.push([currentDate5, `${(currentWeather5 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc5, currentIcon5])

        return arr
    }
    
    getLongLat()
      .then(details => getWeather(details))
      .then(arr => this.setState({weatherRes: arr}))
  }

  saveInverse = () => {
    const { userInput, content, weatherRes } = this.state

    async function getLongLat() {
    const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_LONGLAT}&q=${content}&pretty=1`)
    .then(res => res.json())
    const lngData = res['results'][0]['geometry']['lng']
    const latData = res['results'][0]['geometry']['lat']
    const country = res['results'][0]['components']['country_code']
    const details = {lngData, latData, country}
    return details
  }
  
  async function getWeatherInverse(details) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${details['latData']}&lon=${details['lngData']}&appid=${process.env.REACT_APP_TEMP}`)
      .then(res => res.json())
      let inverseArr = []
      const city = res['city']['name']
      const currentWeather = res['list'][4]['main']['temp']
      const currentDate = res['list'][4]['dt_txt']
      const currentIcon = res['list'][4]['weather'][0]['icon']
      const weatherDesc = res['list'][4]['weather'][0]['description']
      const currentWeather2 = res['list'][12]['main']['temp']
      const currentDate2 = res['list'][12]['dt_txt']
      const currentIcon2 = res['list'][12]['weather'][0]['icon']
      const weatherDesc2 = res['list'][12]['weather'][0]['description']
      const currentWeather3 = res['list'][20]['main']['temp']
      const currentDate3 = res['list'][20]['dt_txt']
      const currentIcon3 = res['list'][20]['weather'][0]['icon']
      const weatherDesc3 = res['list'][20]['weather'][0]['description']
      const currentWeather4 = res['list'][28]['main']['temp']
      const currentDate4 = res['list'][28]['dt_txt']
      const currentIcon4 = res['list'][28]['weather'][0]['icon']
      const weatherDesc4 = res['list'][28]['weather'][0]['description']
      const currentWeather5 = res['list'][36]['main']['temp']
      const currentDate5 = res['list'][36]['dt_txt']
      const currentIcon5 = res['list'][36]['weather'][0]['icon']
      const weatherDesc5 = res['list'][36]['weather'][0]['description']
      const weatherCelcius = `${content}, ${details["country"].toUpperCase()} is currently ${(currentWeather - 273.15).toFixed(2)} °C
      ${currentDate2} is ${(currentWeather2 - 273.15).toFixed(2)} °C
      ${currentDate3} is ${(currentWeather3 - 273.15).toFixed(2)} °C
      ${currentDate4} is ${(currentWeather4 - 273.15).toFixed(2)} °C
      ${currentDate5} is ${(currentWeather5 - 273.15).toFixed(2)} °C
      `

      inverseArr.push([currentDate, `${(currentWeather - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc, currentIcon])
      inverseArr.push([currentDate2, `${(currentWeather2 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc2, currentIcon2])
      inverseArr.push([currentDate3, `${(currentWeather3 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc3, currentIcon3])
      inverseArr.push([currentDate4, `${(currentWeather4 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc4, currentIcon4])
      inverseArr.push([currentDate5, `${(currentWeather5 - 273.15).toFixed(2)} °C`, city, details["country"].toUpperCase(), weatherDesc5, currentIcon5])

      return inverseArr
    }
  getLongLat()
    .then(details => getWeatherInverse(details))
    .then(inverseArr => this.setState({weatherRes: inverseArr}))
}

currentLocation = () => {
    let details = {}
    let lngData = 0
    let latData = 0
    navigator.geolocation.getCurrentPosition((position) => {
      latData = position.coords.latitude
      lngData = position.coords.longitude
      return details = {lngData, latData}
    })
  
  function getWeather(details) {
    const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${details['latData']}&lon=${details['lngData']}&appid=${process.env.REACT_APP_TEMP}`)
      .then(res => res.json())
      console.log(res)
      const currentWeather = res['main']['temp']
      const weatherCelcius = `is currently ${(currentWeather - 273.15).toFixed(2)} °C`
      return weatherCelcius
  }
  getWeather(details)
}
 
  render() {
    const { content, userInput, weatherRes, weatherInverse }  = this.state

    return (
      <div className="Weather" >
        <CityInput
          content={content}
          userInput={userInput}
          handleContentChange={this.handleContentChange}
          saveCity={this.saveCity}
          saveInverse={this.saveInverse}
          defaultAdelaide={this.defaultCities}
        />

        <WeatherList 
        weatherRes={weatherRes}
        weatherInverse={weatherInverse}
        />
      </div>
    )
  }
}

export default Weathers