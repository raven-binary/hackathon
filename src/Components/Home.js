import "../App.css";
import TabGroup from "./TabGroup";
import React from "react";

function Home() {
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="nav_logo_container">
          <img
            class="nav_logo1"
            src={process.env.PUBLIC_URL + "/Marvelogo2.jpg"}
            width="150px"
            alt="Marvel Logo"
          />
          <img
            class="nav_logo2"
            src={process.env.PUBLIC_URL + "/Dclogo2.jpg"}
            width="150px"
            alt="DC logo"
          />
        </div>
      </nav>
      <div className="hero_container">
        <div>
          <div
            class="choose_bar"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/dcvsmarvel.jpg"
              })`,
            }}
          >
            <h1>FIND YOUR INNER HERO</h1>
          </div>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/giphy.gif"})`,
              height: "100vh",
            }}
          >
            <TabGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
