import React from "react";
import "../App.css";

function Card(props) {
  return props.trigger ? (
    <div class="popup">
      <div class="popup-inner">
        <button class="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Card;
