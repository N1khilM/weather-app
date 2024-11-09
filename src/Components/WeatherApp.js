import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const apikey = "Your_Api_Key";

  const fetchWeather = async (cityName) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
    );
    const data = await response.json();
    if (data.cod === 200) {
      setWeather(data);
    } else {
      alert("city not found");
    }
  };
  return (
    <div className="weather-app">
      <Search setCity={setCity} fetchWeather={fetchWeather} />
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default Weather;
