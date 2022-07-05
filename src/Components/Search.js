import { useContext, useRef } from "react";
import DataProvider from "./DataContext";

function Search() {
  const { fetchData, setLoading, dataError, setData } = useContext(DataProvider);
  const location = useRef();

  return (
    <div className="search">
      <h3>Location</h3>
      <h5>Check the air quality in your area</h5>
      <div className="search-input">
        <input
          type="text"
          placeholder="Location"
          ref={location}
        />
        <button
          onClick={() => {
            fetchData(location.current.value);
            setLoading(true);
            setData(null);
            location.current.value = '';
          }}
          style={
            dataError ? { backgroundColor: "#F4A424", color: 'white', transition: "all .2s ease" } : {}
          }
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
