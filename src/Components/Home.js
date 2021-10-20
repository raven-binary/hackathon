import "../App.css";
import SearchBar from "./Search";
import Tabs from "./Tabs";
import Content from "./Content";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="search_bar">
          <SearchBar />
        </div>
      </nav>
      <div className="tab">
        <div>
          <h1> Choose Your Hero</h1>
          <Tabs>
            <div label="All">
              <Content />
            </div>
            <div label="Marvel">
              <Content />
            </div>
            <div label="DC">
              <Content />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Home;
