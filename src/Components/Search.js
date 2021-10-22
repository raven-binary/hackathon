import React from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";

function Search() {
  const API = React.useContext(StoreContext);
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  const searchNow = () => {
    const filtered = API.filter((i) =>
      i.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResult(filtered);
  };

  return (
    <>
      <div className="search_bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="search_input"
            placeholder="Hero Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" className="search_submit" onClick={searchNow}>
            Search
          </button>
        </form>
      </div>
      <div className="card-container search-center">
        {searchResult.map((data) => {
          return (
            <div className="hero-card ">
              <img className="hero-img" src={data.images.sm} />
              {data.name}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
