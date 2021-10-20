import React from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";
import Chart from "./Chart";

function All({ setClicked, setId }) {
  const API = React.useContext(StoreContext);
  console.log(API);

  const mapping = API.map((data) => (
    <>
      {data.biography.publisher === "Marvel Comics" ||
      data.biography.publisher === "DC Comics" ? (
        <div className="hero-card">
          <img className="hero-img" src={data.images.sm} />
          {data.name}
        </div>
      ) : null}
    </>
  ));

  const onClick = () => {
    return (
      <div>
        <Chart />
      </div>
    );
  };
  return (
    <>
      <div onClick={onClick} className="card-container">
        {mapping}
      </div>
    </>
  );
}

export default All;
