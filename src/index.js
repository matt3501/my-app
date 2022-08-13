import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Square extends React.Component {
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(Array(3).fill(null),Array(3).fill(null),Array(3).fill(null)),
        nextPlayer: 'X'
      };
    }

    renderSquare(x, y) {
      return (
        <Square 
          value={this.state.squares[x][y]}
          onClick={() => this.handleClick(x,y)}
        />
      );
    }

    handleClick(x, y) {
      const squares = this.state.squares.slice();

      if (squares[x][y] != null) {return;}

      squares[x][y]=this.state.nextPlayer;

      let nextEntry = this.state.nextPlayer === 'X' ? 'O' : 'X';

      this.setState({squares: squares, nextPlayer: nextEntry});
    }
  
    render() {
      const status = 'Next player: ' + this.state.nextPlayer;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0, 0)}
            {this.renderSquare(0, 1)}
            {this.renderSquare(0, 2)}
          </div>
          <div className="board-row">
            {this.renderSquare(1, 0)}
            {this.renderSquare(1, 2)}
            {this.renderSquare(1, 3)}
          </div>
          <div className="board-row">
            {this.renderSquare(2, 0)}
            {this.renderSquare(2, 1)}
            {this.renderSquare(2, 2)}
          </div>
          <Button as="a" variant="primary">
            Button as link
          </Button>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  