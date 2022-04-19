import React from "react";
import styled from "styled-components";

function Slider() {
  return (
    <Container>
      <Range>
        <RangeNumber></RangeNumber>
      </Range>
    </Container>
  );
}

const Container = styled.div``;

const Range = styled.div``;

const RangeNumber = styled.p``;

export default Slider;
