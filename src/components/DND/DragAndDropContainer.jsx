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
import { arrayMove } from "@dnd-kit/sortable";

import { Column } from "./Column";

const DragAndDropContainer = ({ items, setItems, ItemClassName }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setItems((items) => {
      const originalPos = items.findIndex((item) => item.id === active.id);
      const newPos = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, originalPos, newPos);
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Column items={items} ItemClassName={ItemClassName} />
    </DndContext>
  );
};

export default DragAndDropContainer;
