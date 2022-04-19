import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Slider from "./components/Slider";
function App() {
  return (
    <Container>
      {/* <Toggle /> */}
      {/* <Tab /> */}
      {/* <Input /> */}
      {/* <Dropdown /> */}
      <Slider />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
