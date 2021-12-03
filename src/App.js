import styled from "styled-components";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  return (
    <Container>
      <MainComponent />
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
