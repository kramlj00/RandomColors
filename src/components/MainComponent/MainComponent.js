import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColorInput from "../ColorInput/ColorInput";
import ColorList from "../ColorList/ColorList";
import FetchColor from "../FetchColor/FetchColor";
import FetchList from "../FetchList/FetchList";

function MainComponent() {
  const [colorData, setColorData] = useState("");
  const [list, setList] = useState([
    {
      id: null,
      colorName: "",
    },
  ]);

  useEffect(() => {
    const listHandler = () => {
      console.log(colorData);
      if (
        list.filter((e) => e.colorName === colorData).length === 0 &&
        colorData !== ""
      ) {
        console.log(true);
        FetchList(list, setList, colorData);
      }
    };

    listHandler();
    //console.log(colorData);
  }, [colorData]);

  const changeColorHandler = () => {
    FetchColor(setColorData);
  };

  const colorDataHandler = (data) => {
    //console.log(data);
    setColorData(data);
  };

  return (
    <Container>
      <Button onClick={changeColorHandler} style={{ color: `#${colorData}` }}>
        Click Me!
      </Button>
      <ColorList list={list} currentColor={colorData} setList={setList} />
      <ColorInput colorDataHandler={colorDataHandler} />
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
