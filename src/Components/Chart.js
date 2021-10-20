import React from "react";
import RadarChart from "react-svg-radar-chart";
import { StoreContext } from "../APIcall.js";

const Chart = (props) => {
  const mapping = props.array.map((data) => (
    <>
      {data.biography.publisher === "Marvel Comics" ||
      data.biography.publisher === "DC Comics" ? (
        <div className="hero-card">
          <ul>
            <li>{data.powerstats.power}</li>
            <li>{data.powerstats.strength}</li>
            <li>{data.powerstats.intelligence}</li>
            <li>{data.powerstats.speed}</li>
            <li>{data.powerstats.durability}</li>
          </ul>
        </div>
      ) : null}
    </>
  ));
  return (
    <div>
      <RadarChart
        captions={{
          // columns
          Power: "Power",
          Strength: "Strength",
          Intelligence: "Intelligence",
          Speed: "Speed",
          Durability: "Durability",
        }}
        data={[
          // data
          {
            data: {
              mapping,
            },
            meta: { color: "#58FCEC" },
          },
        ]}
        size={400}
      />
    </div>
  );
};

export default Chart;
