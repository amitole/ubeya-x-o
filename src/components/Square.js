import React from "react";
import styled from "styled-components";

import "./Square.css";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  

  return (
    <Btn className={style} onClick={onClick}>
      {value}
    </Btn>
  );
};

export default Square;

const Btn = styled.button`
  background: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  outline: none;
`;
