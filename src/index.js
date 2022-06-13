import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import Login from "./views/login";
import MyEvents from "./views/myevents";
import Register from "./views/register";

const App = () => {
  return (
    <Router>
      <Route exact component={Home} path="/" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Register} path="/register" />
      <Route exact component={MyEvents} path="/myevents" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
