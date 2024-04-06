import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Template2 = () => {
  const [characters, setCharacters] = useState([
    { id: "luke", name: "Luke" },
    { id: "vader", name: "Vader" },
    { id: "yoda", name: "Yoda" }
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharacters(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((character, index) => (
                <Draggable
                  key={character.id}
                  draggableId={character.id}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list-none"
                    >
                      {character.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Template2;
