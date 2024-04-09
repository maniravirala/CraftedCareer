import React from "react";

import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { Column } from "./Column";

const DragAndDropContainer = ({ items, setItems, ItemClassName, close=false }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
    
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    
    let newItems = [...items];
    newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, items[oldIndex]);
    // const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);
  };

  const handleTagClose = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    newItems.forEach((item, index) => {
      item.id = index + 1;
    });
    setItems(newItems);
  };



  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Column items={items} ItemClassName={ItemClassName} handleTagClose={close ? handleTagClose : null} />
    </DndContext>
  );
};

export default DragAndDropContainer;
