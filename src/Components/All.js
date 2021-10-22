import React, { useState } from "react";
import "../App.css";
import { StoreContext } from "../APIcall.js";
import Card from "./Card";
import CardFlip from "./Flip";
import Chart from "./Chart";

function All() {
  // const handleClick = () => {
  //   const config = {
  //     type: "radar",
  //     data: ALL,
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: "Chart.js Radar Chart",
  //         },
  //       },
  //     },
  //   };
  //   alert(config);
  // };
  const [ID, setID] = React.useState("");
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [hero, setHero] = useState(null);

  const API = React.useContext(StoreContext);
  console.log(API);

  React.useEffect(() => {
    console.log(ID);
  }, [ID]);

  const mapping = API.map((data) => (
    <>
      <>
        {data.biography.publisher === "Marvel Comics" ||
        data.biography.publisher === "DC Comics" ? (
          <div
            id={data.id}
            onClick={() => {
              setButtonPopUp(true);
              setID(data.id);
              setHero(API.find((el) => el.id === data.id));

              console.log(ID);
            }}
            className="hero-card"
          >
            <img className="hero-img" src={data.images.sm} />
            {data.name}
          </div>
        ) : null}
      </>
    </>
  ));

  return (
    <>
      <div
        className="card-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/giphy.gif"})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100%",
        }}
      >
        {mapping}
      </div>
      <Card trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        {hero && <Chart ID={ID} hero={hero} />}
      </Card>
    </>
  );
}

export default All;
