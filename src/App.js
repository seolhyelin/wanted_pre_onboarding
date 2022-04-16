import styled from "styled-components";
// import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
function App() {
  return (
    <Container>
      {/* <Toggle /> */}
      <Tab />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
