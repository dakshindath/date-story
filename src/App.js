import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import StoryList from "./components/StoryList";
import "./App.css"; 

function App() {
  const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  // Fetch data 
  useEffect(() => {
    const fetchData = () => {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; 
      const day = currentDate.getDate();

      axios.get(`http://numbersapi.com/${month}/${day}/date`)
        .then(response => {
          setData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  // search 
  const handleSearch = (query) => {
    if (query) {
      const [month, day] = query.split('/');
      axios.get(`http://numbersapi.com/${month}/${day}/date`)
        .then(response => {
          setFilteredData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setFilteredData("No results found.");
        });
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="app-container">
      <h1>Stories for Today</h1>
      <SearchBar onSearchChange={handleSearch} />
      <StoryList stories={filteredData} />
    </div>
  );
}

export default App;