import { useEffect, useRef, useState } from "react";

import "./App.css";
import data from "./cars.json";
import Products from "./products";

function Searchbar(props) {
  const [searchString, setSearchString] = useState("");
  const [cars, setCars] = useState([]);

  //focus the inputfield on mount
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function searchInput() {
    // Uppdatera cars baserat på söksträngen search.
    const filteredcars = data.filter(
      (data) =>
        data.namn &&
        data.namn.toLowerCase().includes(searchString.toLowerCase())
    );
    setCars(filteredcars);
  }
  //   console.log(cars);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <div className="m-2 justify-content-center">
        <div className="input-group text-center d-flex justify-content-center">
          <div className="form-outline">
            <input
              value={searchString}
              onChange={handleSearch}
              type="search"
              className="form-control"
              ref={inputRef}
            />
          </div>
          <button
            onClick={searchInput}
            type="button"
            className="btn btn-primary searchBtn"
          >
            Sök
          </button>
        </div>
        <Products car={cars} /> <br />
      </div>
    </>
  );
}

export default Searchbar;
