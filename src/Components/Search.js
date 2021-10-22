import React, { useState } from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";
import Card from "./Card";
import Chart from "./Chart";

function Search() {
  const API = React.useContext(StoreContext);
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [ID, setID] = React.useState("");
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [hero, setHero] = useState(null);

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
            <div
              onClick={() => {
                setButtonPopUp(true);
                setID(data.id);
                setHero(API.find((el) => el.id === data.id));
              }}
              className="hero-card "
            >
              <img className="hero-img" src={data.images.sm} alt="" />
              {data.name}
            </div>
          );
        })}
        <Card trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          {hero && <Chart ID={ID} hero={hero} />}
        </Card>
      </div>
    </>
  );
}

export default Search;
