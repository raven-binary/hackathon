import "../App.css";
import SearchBar from "./Search";
import Tabs from "./Tabs";
import Content from "./Content";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <nav class="">
        <div class="web_name">SuperHero Dex</div>
        <div class="search_box">
          <SearchBar />
        </div>
      </nav>
      <div>
        <div>
          <h1>Choose Your Hero</h1>
          <Tabs>
            <div label="All">
              <Content />
            </div>
            <div label="Marvel">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="DC">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
