function WeatherList({ weatherRes }) {
  return(
    <div className="WeatherRes">
      <section className="Weather">
        {weatherRes.map((weather, index) => 
            <p key={index}>{weather[0]}, {weather[1]}</p>
        )}
      </section>
    </div>
  )
}
export default WeatherList