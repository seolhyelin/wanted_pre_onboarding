import React, { useState } from "react";
import styled from "styled-components";

function Slider() {
  const [tosil, setTosil] = useState("1");

  const test2 = (e) => {
    setTosil(e.target.value);
  };

  const hyelin = (e) => {
    const orange = e.target.innerHTML.replace(/[%]/, "");
    setTosil(orange);
  };

  return (
    <Container>
      <Range>
        <RangeNumber>{tosil}</RangeNumber>%
      </Range>
      <SlideWrapper>
        <SlideBar number={tosil} />
        <RangeBar
          type="range"
          min={1}
          max={100}
          onChange={test2}
          value={tosil}
        />
      </SlideWrapper>
      <ButtonWrapper>
        {[1, 25, 50, 75, 100].map((number, index) => {
          return (
            <PercentButton key={index} onClick={hyelin} number={number}>
              {number}%
            </PercentButton>
          );
        })}
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div``;

const Range = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 450px;
  height: 50px;
  padding-top: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
  border: 1px solid #c2c2c2;
  border-radius: 7px;
  color: gray;
`;

const RangeNumber = styled.span`
  margin-right: 30px;
  font-size: 23px;
  font-weight: bold;
  color: black;
`;

const SlideWrapper = styled.div`
  position: relative;
`;

const SlideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 4px;
`;

const RangeBar = styled.input`
  position: relative;
  width: 470px;
  height: 7px;
  -webkit-appearance: none;
  background-color: lightgray;

  ::-webkit-progress-value {
    background-color: red;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    border: 4px solid white;
    border-radius: 70%;
    background: #10aeaf;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 430px;
`;

const PercentButton = styled.button`
  position: absolute;
  top: 0;
  left: ${({ number }) => number}%;
  border-style: none;
  width: 43px;
  height: 22px;
  padding: 4px 8px;
  border-radius: 9px;
  margin-top: 15px;
  font-size: 13px;
  color: gray;
  cursor: pointer;

  &:hover {
    background-color: #10aeaf;
    color: white;
  }
`;

export default Slider;
