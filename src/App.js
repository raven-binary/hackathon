import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Components/Home";
import All from "./Components/All";

function App() {
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
