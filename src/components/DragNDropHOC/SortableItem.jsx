import React from "react";
import { SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => (
  <div className="sortable-item w-full">
    {value}
  </div>
));

export default SortableItem;
