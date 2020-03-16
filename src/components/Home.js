import React, { Component, cloneElement } from "react";
import Game from "./Game";
import Game2 from "./Game2";
import Game3 from "./Game3";

export default class Home extends Component {
  state = {
    redirect1: false,
    redirect2: false,
    redirect13: false
  };
  render() {
    return (
      <>
        <>
          {!this.state.redirect1 &&
            !this.state.redirect2 &&
            !this.state.redirect3 && (
              <div>
                <div className="grid">
                  <div />
                  <div className="grid ">
                    <div />
                    <div className="cinter">
                      <h1 className="welcome">Welcome to Tic Tac Toe Game</h1>
                      <br />
                      <center>
                        <button
                          className="btn  btn-primary btn-circle btn-xl mb-3"
                          onClick={() => {
                            this.setState({ redirect1: true });
                          }}
                        >
                          3x3
                        </button>
                        <button
                          className="btn  btn-primary btn-circle btn-xl mb-3"
                          onClick={() => {
                            this.setState({ redirect2: true });
                          }}
                        >
                          5x5
                        </button>
                        <button
                          className="btn  btn-primary btn-circle btn-xl mb-3"
                          onClick={() => {
                            this.setState({ redirect3: true });
                          }}
                        >
                          7x7
                        </button>
                      </center>
                    </div>

                    <div />
                  </div>
                </div>
              </div>
            )}
          {/* <button
            className="btn btn-success1 mb-3"
            style={{ top: "0" }}
            onClick={() => {
              this.setState({
                redirect1: false,
                redirect2: false,
                redirect3: false
              });
            }}
          >
            reset
          </button> */}

          {this.state.redirect1 && (
            <>
              <div className="header_grid">
                <div />
                <h2>3x3</h2>
                <img
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  src="https://pngimage.net/wp-content/uploads/2018/06/reset-icon-png-1.png"
                  onClick={() => {
                    this.setState({
                      redirect1: false,
                      redirect2: false,
                      redirect3: false
                    });
                  }}
                />
                <div />
              </div>
              <Game />
            </>
          )}
          {this.state.redirect2 && (
            <>
              <div className="header_grid">
                <div />
                <h2 className="h2a">5x5</h2>
                <img
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  src="https://pngimage.net/wp-content/uploads/2018/06/reset-icon-png-1.png"
                  onClick={() => {
                    this.setState({
                      redirect1: false,
                      redirect2: false,
                      redirect3: false
                    });
                  }}
                />
                <div />
              </div>
              <Game2 />
            </>
          )}
          {this.state.redirect3 && (
            <>
              <div className="header_grid">
                <div />
                <h2>7x7</h2>
                <img
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  src="https://pngimage.net/wp-content/uploads/2018/06/reset-icon-png-1.png"
                  onClick={() => {
                    this.setState({
                      redirect1: false,
                      redirect2: false,
                      redirect3: false
                    });
                  }}
                />
                <div />
              </div>
              <Game3 />
            </>
          )}
        </>
      </>
    );
  }
}
