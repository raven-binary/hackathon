import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../App.css";
import Chart from "./Chart";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <button onClick={handleClick}>Flip It</button>
      </div>

      <div class="chart">
        {/* hello */}
        {/* <Chart /> */}
        <button onClick={handleClick}>Flip It</button>
      </div>
    </ReactCardFlip>
  );
};

export default CardFlip;
