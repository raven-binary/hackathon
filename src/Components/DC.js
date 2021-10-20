import React from "react";

function DC() {
  const [ALL, setALL] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
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
      {data.biography.publisher === "DC Comics" ? (
        <div className="hero-card">
          <img className="hero-img" src={data.images.sm} />
          {data.name}
        </div>
      ) : null}
    </>
  ));

  // const mapping = ALL.map((data) => <li key={data.toString()} value={data} />);
  // console.log(mapping);

  /*const [ID, setID] = React.useState("")
  React.useEffect(() => {

    const getData = async () => {

      // Below is to call API
      const res =  await fetch("https://www.superheroapi.com/api.php/4917344464945186/69/connections")
      const test_data = await res.json()

    // below is to specify which data from JSON you would like to call, such as, name, id.
    console.log(test_data)
    }

    setID(test_data.id);
    const data = getData();
  }); */

  return (
    <>
      <div className="card-container">{mapping}</div>
    </>
  );
}

export default DC;
