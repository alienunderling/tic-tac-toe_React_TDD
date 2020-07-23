import React, { Component } from "react";
import Board from "../Board/Board";
import Square from "../Square/Square";
import "./TicTacToe.css";

class TicTacToe extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
    value: "",
  };

  handleClick = () => {
    //console.log("Handle Click");
    alert("Handle Click");

    this.setState({ value: "X" });
  };

  jumpTo = () => {
    console.log("Jump to next square");
  };

  isWinner = () => {
    console.log("Determine the winner");
  };

  renderSquare = (i) => {
    return <Square value={i} squareAction={this.handleClick} />;
  };

  render = () => {
    // unpack the component state by using Object Destructuring
    //const { handleClick, squares } = this.state;
    const status = "Next player: X";

    return (
      <div className="tictactoe-container">
        <div className="status">{status}</div>
        <Board renderSquare={this.renderSquare}></Board>
      </div>
    );
  };
  /*
constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    // <.slice(0, this.state.stepNumber + 1);> => This ensures that if we “go back in time” and then make a new move from that point,
    //we throw away all the “future” history that would now become incorrect.
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      //Unlike the array push() method you might be more familiar with, the concat() method doesn’t mutate the original array, so we prefer it.
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }



    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]; //render the currently selected move according to stepNumber
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Got to game start";

      return (
        //
              Each past move has a unique ID associated with it: it’s the sequential number of the move. 
              The moves are never re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key
            //
                <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
 
        let status;
    
        if (winner) {
        status = "Winner: " + winner;
        } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
        );
    }
    */
}

export default TicTacToe;
