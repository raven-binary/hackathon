import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Components/Home";

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
