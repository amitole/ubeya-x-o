import React, { useState } from "react";
import { calculateWinner } from "./components/Helper";
import Board from "./components/Board";
import styled from "styled-components";

const App = () => {
  const [squarsArray, setSquarsArray] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(squarsArray[stepNum]);
  console.log(winner);
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
    text = "The Winner Is: " + winner;
  }

  return (
    <React.Fragment>
      <Title>X / O Game - With Hooks</Title>
      <SubTitle>{text}</SubTitle>

      <Board squares={squarsArray[stepNum]} onClick={handleClick} />
      {winner ||
        (stepNum == 9 && <button onClick={restart}>Restart Game</button>)}
    </React.Fragment>
  );
};

export default App;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

