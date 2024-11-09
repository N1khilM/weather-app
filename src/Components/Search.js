import React from "react";

const Search = ({ fetchWeather }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value.trim();
    if (cityName) {
      console.log(cityName);
      fetchWeather(cityName); // Calls the fetchWeather function from props
      e.target.elements.city.value = "";
    } else {
      alert("Please enter a city name");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="city" placeholder="Enter city" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
