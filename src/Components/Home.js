import "../App.css";
import SearchBar from "./Search";
import Tabs from "./Tabs";
import Content from "./Content";
import DC from "./DC";
import Marvel from "./Marvel";
import All from "./All";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="search_bar">
          <SearchBar searchText={searchText} handlechange={handleChange} />
        </div>
      </nav>
      <div className="tab">
        <div>
          <h1> Choose Your Hero</h1>
          <Tabs>
            <div label="All">
              <All />
            </div>
            <div label="Marvel">
              <Marvel />
            </div>
            <div label="DC">
              <DC />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Home;
