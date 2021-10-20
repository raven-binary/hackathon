import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Components/Home";
import All from "./Components/All";
// import Chart from "./Components/Chart";

function App() {
  // const [ID, setID] = React.useState("");
  // const [ALL, setALL] = React.useState([]);

  // React.useEffect(() => {
  //   const getData = (id) => {
  //     fetch(`https://akabab.github.io/superhero-api/api/all.json`)
  //       .then((response) => response.json())
  //       .then((response_json) => {
  //         setALL(response_json);
  //       });
  //   };

  // const mapping = ALL.map((data) => (
  //   <li key={data.toString()} value={data} />
  // ));
  /*
    {
      ALL
        ? ALL.map((a, index) => {
            return <li key={index}>{a}</li>;
          })
        : null;
    }*/
  //   getData();
  // }, []);

  // const mapping = ALL.map((data) => (
  //   <div className="hero-Card">{data.name}</div>
  // ));

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Chart /> */}
      {/* <Mapping /> */}
      {/* /* <div>
        {ALL.map((a, index) => {
          return <div key={ALL.index}>{ALL.a}</div>;
        })} */
      /* {mapping} */
      /* {console.log(a.name)} */}
    </>
  );
}

export default App;
