import React, { useState } from "react";
import { calculateWinner } from "./components/Helper";
import Board from "./components/Board";
import styled from "styled-components";

import "./App.css";

const App = () => {
  const [squarsArray, setSquarsArray] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  let winner = calculateWinner(squarsArray[stepNum]);

  const player = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const current = squarsArray[stepNum];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = player;
    setSquarsArray([...squarsArray, squares]);
    setStepNum(stepNum + 1);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setSquarsArray([Array(9).fill(null)]);
    setStepNum(0);
    setXisNext(true);
  };

  let text;
  if (!winner) {
    text = "Next Player: " + player;
  }

  if (!winner && stepNum == 9) {
    text = "ITS A TIE!!!";
  }
  if (winner) {
    console.log(winner);
    text = "The Winner Is: " + winner[0];
  }

  return (
    <>
      <Title>X / O Game - With Hooks</Title>
      <SubTitle>{text}</SubTitle>
      {winner && <div className={`win${winner[1]}`}></div>}
      <Board squares={squarsArray[stepNum]} onClick={handleClick} />
      {(winner || stepNum == 9) && (
        <button onClick={restart}>Restart Game</button>
      )}
    </>
  );
};

export default App;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;
