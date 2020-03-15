import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <>
        <div className="grid">
          <img
            className="logo"
            src="https://www.nicepng.com/png/detail/205-2056186_tic-tac-toe-x-and-o.png"
          />
          <div />
          <div />
        </div>
        <Home />
      </>
      // <Home/>
    );
  }
}

export default App;
