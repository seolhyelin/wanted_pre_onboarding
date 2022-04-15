import React, { useState } from "react";
import styled from "styled-components";

function Toggle() {
  return (
    <Container>
      <ToggleWrapper>
        <ActiveBar />
        <Button>기본</Button>
        <Button>상세</Button>
      </ToggleWrapper>
    </Container>
  );
}

const Container = styled.div``;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 55px;
  background-color: #f2f1f0;
  border-radius: 50px;
`;

const ActiveBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: inherit;
  background-color: red;
  border-radius: 50px;
`;

const Button = styled.button`
  width: 50%;
  border-style: none;
  background: none;
  font-size: 23px;
  cursor: pointer;
`;

export default Toggle;
