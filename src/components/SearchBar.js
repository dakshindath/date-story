import React, { useState } from 'react';

const SearchBar = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearchChange(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search stories by month/day (eg, 1/21)"
        value={query}
        onChange={handleChange}
        className="search-bar"
      />
       <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;