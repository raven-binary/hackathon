import React from "react";

function Marvel() {
  const text1 = "Marvel Comics";

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
    <div>
      {data.biography.publisher === text1 ? (
        <div className="hero-card">
          <img className="hero-img" src={data.images.sm} />
          {data.name}
        </div>
      ) : (
        <></>
      )}
    </div>
  ));

  return (
    <>
      <div className="card-container">{Marvel}</div>
    </>
  );
}

export default Marvel;
