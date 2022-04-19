import React from "react";
import styled from "styled-components";

function Slider() {
  return (
    <Container>
      <Range>
        <RangeNumber>70</RangeNumber>%
      </Range>
      <SlideWrapper>
        <RangeBar type="range" min={1} max={100}></RangeBar>
      </SlideWrapper>
      <ButtonWrapper>
        {[1, 25, 50, 75, 100].map((number) => {
          return <PercentButton>{number}%</PercentButton>;
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

const SlideWrapper = styled.div``;

const RangeBar = styled.input`
  width: 470px;
  height: 7px;
  -webkit-appearance: none;
  background: #10aeaf;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 70%;
    background: #10aeaf;
    cursor: pointer;
  }
`;
const ButtonWrapper = styled.div``;
const PercentButton = styled.button`
  border-style: none;
  width: 45px;
  height: 22px;
  padding: 4px 8px;
  border-radius: 9px;
  margin-top: 15px;
  margin-right: 62px;
  font-size: 13px;
  color: gray;

  &:hover {
    background-color: #10aeaf;
    color: white;
  }
`;
export default Slider;
