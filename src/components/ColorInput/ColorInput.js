import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function ColorInput({ colorDataHandler, buttonTextHandler }) {
  function isHexColor(hex) {
    return (
      typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex))
    );
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      //console.log(e.target.value);
      let text = e.target.value;
      if (isHexColor(text)) {
        colorDataHandler(text);
      } else {
        alert("Wrong hex color input!");
      }
    }
  }

  function handleOnChange(e) {
    buttonTextHandler(e.target.value);
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Enter hex color"
        autoFocus
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
      />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </SearchContainer>
  );
}

export default ColorInput;

const SearchContainer = styled.div`
  display: flex;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
  height: 30px;
  width: 50%;
  border: 2px solid grey;
  padding-left: 4px;
  :focus-within {
    box-shadow: 0 0 0 3px #ddd;
  }
`;
const SearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;
const SearchIconContainer = styled.div`
  display: flex;
  background-color: #ddd;
  color: black;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
