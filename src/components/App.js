import "./App.css";
import Search from "./Search";
import Dropdown from "./Dropdown";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  // ========== FETCHING API DATA ==========
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://612619c7e40e1900170727fe.mockapi.io/api/users"
      );
      setData(res.data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (selectedCountry || selectedVehicle) {
      const found = data.filter(
        (item) =>
          item.country === selectedCountry || item.vehicle === selectedVehicle
      );
      setFilteredData(found);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedCountry, selectedVehicle]);


  return (
    <div className="app">
      <div className="top-section">
        <h1 className="top-title">Filter:</h1>

        <Dropdown
          data={data}
          setSelectedCountry={setSelectedCountry}
          setSelectedVehicle={setSelectedVehicle}
        />

        <div className="user-search">
          <Search data={data} />
          {/* RENDERING FILTERED DATA */}
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
      </div>
    </div>
  );
}

export default App;
