import { useEffect, useState } from 'react';
import './styles.css';

function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

function TicTocToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState('');

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXturn ? 'X' : 'O'}`);
    }
  }, [squares, isXturn]);

  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];
    copySquares[getCurrentSquare] = isXturn ? 'X' : 'O';
    setIsXturn(!isXturn);
    setSquares(copySquares);
  };
  const restartGame = () => {
    setSquares(Array(9).fill(''));
    setIsXturn(true);
    setStatus('');
  };

  return (
    <div className="main-container">
      <h1 className="title">Tic-Toc-Toe game using React</h1>
      <div className="game-container">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <h3>{status}</h3>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default TicTocToe;
