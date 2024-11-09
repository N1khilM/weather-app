import React from "react";

const Search = ({ setCity, fetchWeather }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value;

    fetchWeather(cityName);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
