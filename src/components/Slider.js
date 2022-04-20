import React, { useState } from "react";
import styled from "styled-components";

function Slider() {
  const [percent, setPercent] = useState(1);

  const handlePercent = (e) => {
    setPercent(e.target.value);
  };

  const percentSlide = () => {
    const slider = [];
    for (let i = 1; i <= 100; i++) {
      slider.push(
        <Sliders
          key={`${i}`}
          id={`${i}`}
          onClick={() => setPercent(i)}
          percent={percent}
        />
      );
    }
    return slider;
  };

  return (
    <Container>
      <Range>
        <RangeNumber>{percent}</RangeNumber>%
      </Range>
      <SlideWrapper>
        {percentSlide()}
        <RangeBar
          type="range"
          min={1}
          max={100}
          onChange={handlePercent}
          value={percent}
        />
      </SlideWrapper>
      <ButtonWrapper>
        {[1, 25, 50, 75, 100].map((number, index) => {
          return (
            <PercentButton
              key={index}
              onClick={() => setPercent(number)}
              number={number}
            >
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
  display: flex;
  align-items: center;
`;

const Sliders = styled.div`
  width: 4.7px;
  height: ${({ id }) =>
    id === "1" || id === "25" || id === "50" || id === "75" || id === "100"
      ? "10px"
      : "10px"};
  background-color: ${({ id, percent }) =>
    Number(id) <= percent ? "#10aeaf" : "lightgray"};
`;

const RangeBar = styled.input`
  position: absolute;
  width: 470px;
  height: 7px;
  -webkit-appearance: none;
  background-color: inherit;
  margin: 0px;
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
