import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ColorList({ list, currentColor, setList }) {
  function handleOnDragEnd(result) {
    // if we don't drag item outside draggable area
    if (result.destination) {
      const items = Array.from(list);
      // find original index and remove it the array
      // it returns a new item
      const [reorderedItem] = items.splice(result.source.index, 1);

      // find destination index and put reorderedItem there
      items.splice(result.destination.index, 0, reorderedItem);

      setList(items);
      // console.log(result);
    }
  }

  return (
    <ListContainer>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="colors">
          {(provided) => (
            <ListItems
              className="colors"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((item, index) =>
                item.colorName ? (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Item
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        itemColor={item.colorName}
                        className={
                          currentColor === item.colorName ? "bolded" : null
                        }
                      >
                        {item.colorName}
                      </Item>
                    )}
                  </Draggable>
                ) : null
              )}
              {provided.placeholder}
            </ListItems>
          )}
        </Droppable>
      </DragDropContext>
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
