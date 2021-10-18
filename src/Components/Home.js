import "../App.css";
import SearchBar from "./Search";
import Tabs from "./Tabs";
import React, { useState, useEffect, useRef } from "react";

function Home() {
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="search_bar">
          <SearchBar />
        </div>
      </nav>
      <div>
        <div>
          <h1>Choose Your Hero</h1>
          <Tabs>
            <div label="All">
              See ya later, <em>Alligator</em>!
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
    </div>
  );
}

export default Home;
