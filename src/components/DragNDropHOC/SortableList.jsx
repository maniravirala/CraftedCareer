import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = SortableContainer(({ items, isDragging }) => {
  return (
    <div className={`${isDragging ? "grabbing" : "grab"} `}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.component} />
      ))}
    </div>
  );
});

export default SortableList;
