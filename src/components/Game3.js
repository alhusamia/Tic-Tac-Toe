import React, { Component } from "react";
import Border3 from "./Border3";

export default class Game3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(49).fill(null) }],
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  handelClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to #" + move : "Start the Game";
      return (
        <li key={move}>
          <button
            className="button"
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });
    let statuse;
    if (winner) {
      statuse = "Winner is " + winner;
    } else {
      statuse = "Next Player is " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="grid_7">
        <div />
        <div>
          <div className="game-board">
            <Border3
              onClick={(i) => this.handelClick(i)}
              squares={current.squares}
            />
          </div>
        </div>
        <div className="game-info2">
          {winner ? (
            <>
              {" "}
              <div className="hi">{statuse}</div>
              <br />
            </>
          ) : (
            <>
              <div className="welcome">{statuse}</div>
              <br />
            </>
          )}
          <ul className="ul2">{moves} </ul>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48],
    [0, 7, 14, 21, 28, 35, 42],
    [1, 8, 15, 22, 29, 36, 43],
    [2, 9, 16, 23, 30, 37, 44],
    [3, 10, 17, 24, 31, 38, 45],
    [4, 11, 18, 25, 32, 39, 46],
    [5, 12, 19, 26, 33, 40, 47],
    [6, 13, 20, 27, 34, 41, 48],
    [0, 8, 16, 24, 32, 40, 48],
    [6, 12, 18, 24, 30, 36, 42],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e, f, g] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[c] === squares[d] &&
      squares[d] === squares[e] &&
      squares[e] === squares[f] &&
      squares[f] === squares[g]
    ) {
      return squares[a];
    }
  }
  return null;
}
