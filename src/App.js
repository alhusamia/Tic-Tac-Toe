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
            src="https://www.pngkey.com/png/full/296-2966115_game-png-background-image-tic-tac-toe-logo.png"
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
