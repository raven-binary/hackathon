import React from "react";
import RadarChart from "react-svg-radar-chart";
import { StoreContext } from "../APIcall.js";

const Chart = () => {
  const API = React.useContext(StoreContext);

  const GetChart = API.map((hero) => (
    <>
      {hero.biography.publisher === "Marvel Comics" ||
      hero.biography.publisher === "DC Comics" ? (
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
                  // columns
                  Power: hero.powerstats.power / 100,
                  Strength: hero.powerstats.strength / 100,
                  Intelligence: hero.powerstats.intelligence / 100,
                  Speed: hero.powerstats.speed / 100,
                  Durability: hero.powerstats.durability / 100,
                },
                meta: { color: "#58FCEC" },
              },
            ]}
            size={500}
          />
          {/* {hero && console.log(hero.powerstats.power)} */}
          <ul>
            <li>Name : {hero.name}</li>
            <li>Publisher : {hero.biography.publisher}</li>
            <li>
              Overall score :{" "}
              {Math.round(
                (hero.powerstats.power +
                  hero.powerstats.strength +
                  hero.powerstats.intelligence +
                  hero.powerstats.speed +
                  hero.powerstats.durability) /
                  6
              ) +
                (Number.EPSILON * 100) / 100}
            </li>
          </ul>
        </div>
      ) : null}
    </>
  ));
  return <div>{GetChart}</div>;
};

export default Chart;
