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
    </>
  );
}

export default App;
