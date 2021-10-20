import React from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";

function DC() {
  const API = React.useContext(StoreContext);
  console.log(API);

  const mapping = API.map((data) => (
    <>
      {data.biography.publisher === "DC Comics" ? (
        <div className="hero-card">
          <img className="hero-img" src={data.images.sm} />
          {data.name}
        </div>
      ) : null}
    </>
  ));

  return (
    <>
      <div className="card-container">{mapping}</div>
    </>
  );
}

export default DC;
