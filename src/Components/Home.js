import "../App.css";
import Tabs from "./Tabs";
import DC from "./DC";
import Marvel from "./Marvel";
import All from "./All";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreContext } from "../APIcall.js";
import Chart from "./Chart.js";
import Search from "./Search.js";

function Home() {
  const [isClicked, setClicked] = React.useState(false);
  const [id, setId] = React.useState("");
  const API = React.useContext(StoreContext);
  console.log(API);

  const CheckClicked = API.map((data) => {});

  const CheckID = API.map((data) => {});
  // const mapping = API.map((data) => (
  //   <>
  //     {data.biography.publisher === "Marvel Comics" ? (
  //       <div className="hero-card">
  //         <img className="hero-img" src={data.images.sm} />
  //         {data.name}
  //       </div>
  //     ) : null}
  //   </>
  // ));

  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="search_bar"></div>
      </nav>
      <div className="tab">
        <div>
          <h1> Choose Your Hero</h1>
          <Tabs>
            <div label="All">
              <All setClicked={setClicked} setId={setId} />
            </div>
            <div label="Marvel">
              <Marvel />
              <Chart />
            </div>
            <div label="DC">
              <DC />
            </div>
            <div label="Chart">
              <Chart />
            </div>
          </Tabs>
        </div>
      </div>
      {isClicked ? (
        <div>
          <Chart id={id} />
        </div>
      ) : null}
    </div>
  );
}
export default Home;
