import React from 'react';
import { useSortable } from '@dnd-kit/sortable'; 
const commonStyle = {
  cursor: 'grab',
  transition: 'unset',
};

function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = transform
    ? {
      ...commonStyle,
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging
      cursor: isDragging? 'grabbing' : 'grab',
    }
    : commonStyle;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default SortableItem;
