import React, { useState } from "react";
import styled from "styled-components";

function Tab() {
  const [isSelected, setSelected] = useState("감자");
  const [number, setNumber] = useState(0);

  const clickWord = (e) => {
    setNumber(e.target.id);
    setSelected(e.target.name);
  };

  return (
    <Wrapper>
      {["감자", "고구마", "카레라이스"].map((word, index) => {
        return (
          <Category
            key={word}
            id={index}
            name={word}
            isSelected={isSelected}
            onClick={clickWord}
          >
            {word}
          </Category>
        );
      })}
      <HighLight number={number} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  margin-bottom: 50px;
  border-bottom: 4px solid #d3d3d3;
  z-index: 0;
`;

const Category = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 80px;
  font-size: 1.2rem;
  font-weight: 600;
  background: none;
  border: none;
  color: ${({ isSelected, name }) =>
    isSelected === name ? "#000000" : "#d3d3d3"};
  z-index: 9999;
  cursor: pointer;
`;

const HighLight = styled.div`
  position: absolute;
  top: 80px;
  width: 200px;
  height: 4px;
  border-radius: 100px;
  background-color: #10aeaf;
  transform: translateX(${({ number }) => `${number * 100}%`});
  transition: 0.4s ease-out;
`;

export default Tab;
