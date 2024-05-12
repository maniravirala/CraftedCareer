import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Test = () => {
  const sections = ['Education', 'Work Experience', 'Skills']; // Example sections
  const items = {
    'Education': ['Item 1', 'Item 2'],
    'Work Experience': ['Item 3', 'Item 4'],
    'Skills': ['Item 5', 'Item 6']
  }; // Example items

  const onDragEnd = (result) => {
    // TODO: Implement reordering logic
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {sections.map((section, index) => (
        <Droppable key={section} droppableId={section}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ background: snapshot.isDraggingOver ? 'lightblue' : 'white' }}
              {...provided.droppableProps}
            >
              <h2>{section}</h2>
              {items[section].map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

export default Test;