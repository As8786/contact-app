import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes'

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/contacts">
            <input type="button" value="Contact List" />
          </Link>

          <Link to="/add_contact">
            <input type="button" value="Add Contact" />
          </Link>

          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
