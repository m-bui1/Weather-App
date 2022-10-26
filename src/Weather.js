function WeatherCalc ({ content, userInput, getWeatherData, saveCity, handleCityChange }) {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <form action="">
        <input type="text" className="cityName" 
        onChange={handleCityChange}
        value={content}
        />
        <button className="cityButton" onClick={saveCity}>Submit City</button>
      </form>
    </div>
  )
}
export default WeatherCalc