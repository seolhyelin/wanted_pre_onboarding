import React from "react";
import styled from "styled-components";

const BoardTemplate = ({ name, children }) => {
  return (
    <Container>
      <NameContainer>{name}</NameContainer>
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 120px;
`;

const NameContainer = styled.div`
  color: #0c877f;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: 700;
`;

export default BoardTemplate;
