import React, { useState } from "react";
import styled from "styled-components";

function Toggle() {
  const [currentActive, setCurrentActive] = useState("기본");

  const handleActive = (e) => {
    if (e.target.classList.contains("default")) {
      if (currentActive === "기본") return;
      setCurrentActive("기본");
    } else {
      if (currentActive === "상세") return;
      setCurrentActive("상세");
    }
  };

  return (
    <Container>
      <ToggleWrapper>
        <Slider>
          <ActiveBar currentActive={currentActive} />
          <Button
            className="default"
            onClick={handleActive}
            currentActive={currentActive}
          >
            기본
          </Button>
          <Button
            className="detail"
            onClick={handleActive}
            currentActive={currentActive}
          >
            상세
          </Button>
        </Slider>
      </ToggleWrapper>
    </Container>
  );
}

const Container = styled.div``;

const ToggleWrapper = styled.div`
  width: 450px;
  height: 60px;
  padding: 0 5px;
  background-color: #f2f1f0;
  border-radius: 50px;
`;

const Slider = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ActiveBar = styled.div`
  position: absolute;
  left: 0;
  width: 225px;
  height: 55px;
  border-radius: 50px;
  background-color: white;
  transition: 0.4s;
  transform: translateX(
    ${({ currentActive }) => (currentActive === "기본" ? "0%" : "100%")}
  );
  z-index: 2;
  cursor: pointer;
`;

const Button = styled.button`
  position: relative;
  width: 50%;
  height: 100%;
  border-style: none;
  background: none;
  font-size: 23px;
  z-index: 101;
  cursor: pointer;
`;

export default Toggle;
