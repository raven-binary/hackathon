import React from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";

function Search() {
  const API = React.useContext(StoreContext);
  console.log(API);

  const Timage = API[4].images.sm;
  const Tname = API[4].name;

  const Tmap = (
    <div className="hero-card">
      <img className="hero-img" src={Timage} />
      {Tname}
    </div>
  );

  return (
    <>
      <div className="card-container">{Tmap}</div>
    </>
  );
}

export default Search;
