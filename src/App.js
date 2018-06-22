import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";
import Dashboard from "./component/Dashboard/Dashboard";
import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header/Header";
import House from "./component/House/House";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
