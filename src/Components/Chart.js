import React from "react";
import RadarChart from "react-svg-radar-chart";
import { StoreContext } from "../APIcall.js";
import "../App.css";
import "./Chart.css";

const Chart = ({ hero }) => {
  // const API = React.useContext(StoreContext);
  console.log(hero);

  return (
    <>
      <div className="popup-hero-img">
        {hero.name}

        <img className="pop-hero-img" src={hero.images.sm} />
      </div>
      <div className="popup-hero-chart">
        <RadarChart
          captions={{
            // columns
            Power: "POW",
            Strength: "STR",
            Intelligence: "INT",
            Speed: "SPD",
            Durability: "DUR",
          }}
          data={[
            // data
            {
              data: {
                // columns
                Power: hero.powerstats.power / 100,
                Strength: hero.powerstats.strength / 100,
                Intelligence: hero.powerstats.intelligence / 100,
                Speed: hero.powerstats.speed / 100,
                Durability: hero.powerstats.durability / 100,
              },
              meta: { color: "#ef233c" },
            },
          ]}
          size={450}
        />

        {/* <p>Power (POW) : {hero.powerstats.power }</p>
        <p>Strength (STR) : {hero.powerstats.strength }</p>
        <p>Intelligence (INT) : {hero.powerstats.intelligence }</p>
        <p>Speed SPD) : {hero.powerstats.speed }</p>
        <p>Durability (DUR) : {hero.powerstats.durability }</p>
          Overall score :{" "}
          {Math.round(
            (hero.powerstats.power +
              hero.powerstats.strength +
              hero.powerstats.intelligence +
              hero.powerstats.speed +
              hero.powerstats.durability) /
              6
          ) +
            (Number.EPSILON * 100) / 100}  */}

        <div className="popup-hero-details">
          <p>Publisher : {hero.biography.publisher}</p>
          <p>Full Name : {hero.biography.fullName}</p>
          {/* <p>Aliases : {hero.biography.aliases}</p> */}
          <p>First Appearance : {hero.biography.firstAppearance}</p>
          <p>Place Of Birth : {hero.biography.placeOfBirth}</p>
          {/* <p>Relatives : {hero.connections.relatives}</p> */}
          <p>Group Affiliation : {hero.connections.groupAffiliation}</p>
        </div>
      </div>
    </>
  );
};

export default Chart;
