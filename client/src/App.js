import React from "react";
import Blockchain from "./components/Blockchain";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/blockchain/:userid">
          <Blockchain />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
