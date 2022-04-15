import styled from "styled-components";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Container>
      <Toggle />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
