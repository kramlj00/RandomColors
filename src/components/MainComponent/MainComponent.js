import React, { useState } from "react";
import styled from "styled-components";
import FetchColor from "../FetchColor/FetchColor";

function MainComponent() {
  const [colorData, setColorData] = useState("");

  const changeColorHandler = () => {
    FetchColor(setColorData);
  };

  return (
    <Container>
      <Button onClick={changeColorHandler} style={{ color: `#${colorData}` }}>
        Click Me!
      </Button>
    </Container>
  );
}

export default MainComponent;

const Container = styled.div``;
const Button = styled.button`
  width: 120px;
  height: 50px;
  margin-top: 40px;
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  text-decoration: none;
`;
