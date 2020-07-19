import React, { useState } from "react";
import { calculateWinner } from "./components/Helper";
import Board from "./components/Board";
import styled from "styled-components";


const App = () => {
  const [squarsArray, setSquarsArray] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(squarsArray[stepNum]);
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

  return (
    <React.Fragment>
      <Title>X / O Game - With Hooks</Title>
      <SubTitle>
        {winner ? "The Winner Is: " + winner : "Next Player: " + player}
      </SubTitle>
      <Board squares={squarsArray[stepNum]} onClick={handleClick} />
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

