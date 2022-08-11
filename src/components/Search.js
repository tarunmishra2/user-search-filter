import { useState, useEffect } from "react";
import "./Search.css";

function Search({ data }) {
  
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ========== MATCHING SEARCH INPUT WITH API DATA ==========
  useEffect(() => {
    setFilteredData([]);
    data.filter((item) => {
      if (
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.country.toLowerCase().includes(input.toLowerCase()) ||
        item.email.toLowerCase().includes(input.toLowerCase()) ||
        item.vehicle.toLowerCase().includes(input.toLowerCase())
      ) {
        setFilteredData((filteredData) => [...filteredData, item]);
      }
    });
  }, [input]);


  function searchInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="SEARCH"
        onChange={searchInput}
      ></input>

      {filteredData.map((item) => (
        <div className="user-profile" key={item.id}>
          <img
            src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            className="pfp"
            alt="user-avatar"
          />
          <p style={{ fontWeight: "bold" }}>{item.name}</p>
          <p style={{ opacity: "0.8" }}>{item.email}</p>
          <p>{item.country}</p>
          <p>{item.vehicle}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
