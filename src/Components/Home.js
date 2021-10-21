import "../App.css";
import TabGroup from "./TabGroup";
import React, { useState, useEffect, useRef } from "react";
import marvellogo from "./Marvelogo2.jpg";
import dclogo from "./Dclogo2.jpg";
import spiderbat from "./dcvsmarvel.jpg";
// import ScrollButton from "./ScrollTop";

function Home() {
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="nav_logo">
          <img
            class="nav_logo1"
            src={marvellogo}
            width="150px"
            alt="Marvel Logo"
          />
          <img class="nav_logo2" src={dclogo} width="150px" alt="DC logo" />
        </div>
      </nav>
      <div className="hero_container">
        <div>
          <div
            class="choose_bar"
            style={{ backgroundImage: `url(${spiderbat})` }}
          >
            <h1>FIND YOUR INNER HERO</h1>
          </div>
          <TabGroup />
          {/* <ScrollButton /> */}
        </div>
      </div>
    </div>
  );
}
export default Home;
