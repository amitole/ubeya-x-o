import React from "react";
import Square from "./Square";
import styled from "styled-components";


const Board = ({ squares, onClick }) => (
  <Container>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </Container>
);

export default Board;

const Container = styled.div`
  border: 1px solid blueviolet;
  background: blueviolet;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  /* gap: 1px; */
`;

const Line = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  z-index: 10;
  width: 5px;
  height: 480px;
  background-color: red;
`;
