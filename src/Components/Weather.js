import React from "react";

const Weather = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather || !weather.weather[0]) {
    return <p>Loading weather data...</p>;
  }
  return (
    <div className="weather-info">
      <h1>Weather Info </h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Wind Speed: {weather.wind.speed}m/s</p>
    </div>
  );
};

export default Weather;
