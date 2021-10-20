import React from "react";
import "../App.css";

function Marvel() {
  const [ALL, setALL] = React.useState([]);

  React.useEffect(() => {
    const getData = (id) => {
      fetch(`https://akabab.github.io/superhero-api/api/all.json`)
        .then((response) => response.json())
        .then((response_json) => {
          setALL(response_json);
        });
    };

    getData();
  }, []);

  console.log(ALL);
  const mapping = ALL.map((data) => (
    <>
      {data.biography.publisher === "Marvel Comics" ? (
        <div className="hero-card">
          <img className="hero-img" src={data.images.sm} />
          {data.name}
        </div>
      ) : null}
    </>
  ));

  return (
    <>
      <div className="card-container">{mapping}</div>
    </>
  );
}

export default Marvel;
