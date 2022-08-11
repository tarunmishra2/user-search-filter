import "./Dropdown.css"

function Dropdown({ data, setSelectedCountry, setSelectedVehicle }) {


  // FUNCTION TO RESET SEARCH RESULT
  function reset() {
    setSelectedCountry("");
    setSelectedVehicle("");
  }

  // ======== MAIN JSX ========
  return (
    <div className="dropdown">
      {/* RENDERING DROPDOWN OPTIONS */}
      <div className="dropdown-options">
        <select
          className="dd-item"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Country</option>
          {data.map((item) => (
            <option key={item.id} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>

        <select
          className="dd-item"
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="">Vehicle</option>
          {data.map((item) => (
            <option key={item.id} value={item.vehicle}>
              {item.vehicle}
            </option>
          ))}
        </select>

        {/* RESET BUTTON */}
        <button className="reset" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
