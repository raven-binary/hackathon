import "../App.css";
import SearchBar from "./Search";
import DC from "./DC";
import Marvel from "./Marvel";
import All from "./All";
import TabGroup from "./Tab Remake";
import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import marvellogo from './Marvelogo.jpg';
import dclogo from './Dclogo.jpg';

const App = (props) => {
  window.addEventListener('click', (event) => {
    // ...
  });
  return (
    console.log(event)
  );
};

function Home() {
  
  return (
    <div>
      <nav>
        <div class="web_name">SuperHero Dex</div>
        <div class="nav_logo">
          <img class="nav_logo2"src={marvellogo} width="170px" alt="Marvel Logo"/>
          <img class="nav_logo2" src={dclogo} width="150px" alt="DC logo"/>
        </div>
      </nav>
      <div className="tab">
        <div>
          <div  class="choose_bar">
          <h1>FIND YOUR INNER HERO</h1>
          <SearchBar />
          </div>
          <TabGroup/>
        </div>
      </div>
    </div>
  );
}

export default Home;
