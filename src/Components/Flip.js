import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../App.css";
import Chart from "./Chart";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;

    autoResize(newWidth);
  });

  const autoResize = (width) => {
    let size = 0;
    //console.log("Desktop: " + isDesktopSize);
    console.log(window.innerWidth);
    if (window.innerWidth > 810) {
      size = 450;
    } else if (window.innerWidth < 810 && window.innerWidth > 640) {
      size = 300;
    } else if (window.innerWidth < 640 && window.innerWidth > 570) {
      size = 280;
    } else {
      size = 200;
    }
    return size;
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
