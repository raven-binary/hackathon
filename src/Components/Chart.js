import React from "react";
import RadarChart from "react-svg-radar-chart";
import "../App.css";
import "./Chart.css";

const Chart = ({ hero }) => {
  return (
    <>
      <div className="popup-hero-img">
        {hero.name}

        <img className="pop-hero-img" src={hero.images.sm} alt="" />
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
          size={window.innerWidth / 3.7} // whatSize();
        />
        <div className="popup-hero-details">
          <p>Publisher : {hero.biography.publisher}</p>
          <p>Full Name : {hero.biography.fullName}</p>
          <p>First Appearance : {hero.biography.firstAppearance}</p>
          <p>Place Of Birth : {hero.biography.placeOfBirth}</p>
          <p>Group Affiliation : {hero.connections.groupAffiliation}</p>
        </div>
      </div>
    </>
  );
};

export default Chart;
