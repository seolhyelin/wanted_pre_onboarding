import React from "react";
import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Slider from "./components/Slider";
import BoardTemplate from "./components/BoardTemplate";

function App() {
  return (
    <Container>
      <BoardTemplate name="Toggle">
        <Toggle />
      </BoardTemplate>
      <BoardTemplate name="Tab">
        <Tab />
      </BoardTemplate>{" "}
      <BoardTemplate name="Slider">
        <Slider />
      </BoardTemplate>
      <BoardTemplate name="Input">
        <Input />
      </BoardTemplate>
      <BoardTemplate name="Dropdown">
        <Dropdown />
      </BoardTemplate>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
