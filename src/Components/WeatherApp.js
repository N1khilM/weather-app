import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log("API Key:", apiKey);

  const fetchWeather = async (cityName) => {
    try {
      console.log("City being searched:", cityName);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        console.log("Response Status:", response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Weather Data:", data);

      if (data.cod === 200) {
        setWeather(data);
      } else {
        console.error("API Error:", data.message);
        alert(`API Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error in fetchWeather:", error);
      alert(
        "There was an error fetching the weather data. Please check the console."
      );
    }
  };

  return (
    <div className="weather-app">
      <Search fetchWeather={fetchWeather} />
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default WeatherApp;
