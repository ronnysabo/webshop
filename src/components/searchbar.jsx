import { useEffect, useRef, useState } from "react";
import data from "../cars.json";
import Products from "./products";

function Searchbar(props) {
  //States
  const [searchString, setSearchString] = useState("");
  const [cars, setCars] = useState([]);

  //focus the inputfield on mount
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function searchInput() {
    // update cars based on searchstring
    const filteredcars = data.filter(
      (data) =>
        data.namn &&
        data.namn.toLowerCase().includes(searchString.toLowerCase())
    );
    setCars(filteredcars);
  }

  //changing state based on value from input-field
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  //if u click Enter button, call the searchInput function!
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchInput();
    }
  };

  //render the heading, inputfield, searchbutton and cars
  // (that includes searchstring)
  return (
    <>
      <h2 className="text-center m-3">Bilar Online</h2>

      <div className="m-4 justify-content-center">
        <div className="input-group text-center d-flex justify-content-center">
          <div className="form-outline">
            <input
              placeholder="Sök bil..."
              onKeyPress={handleKeyDown}
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
            className="btn btn-dark searchBtn"
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
