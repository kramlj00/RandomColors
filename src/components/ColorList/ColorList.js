import React from "react";
import styled from "styled-components";

function ColorList({ list }) {
  return (
    <ListContainer>
      <ListItems>
        {list.map((item) =>
          item.colorName ? (
            <Item key={item.id} itemColor={item.colorName}>
              {item.colorName}
            </Item>
          ) : null
        )}
      </ListItems>
    </ListContainer>
  );
}

export default ColorList;

const ListContainer = styled.div``;
const ListItems = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.li`
  list-style: none;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 25px;
  border: 2px solid gray;
  width: 25%;
  margin-top: 10px;
  border-radius: 5px;
  color: #${(props) => props.itemColor};

  &.bolded {
    font-weight: bold;
  }
`;
