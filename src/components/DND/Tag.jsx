import { useSortable } from "@dnd-kit/sortable";
const commonStyle = {
  cursor: 'grab',
  transition: 'unset', // Prevent element from shaking after drag
};

export const Tag = ({ id, content, ItemClassName, handleTagClose }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

    const style = transform
    ? {
      ...commonStyle,
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging
      cursor: isDragging? 'grabbing' : 'grab',
    }
    : commonStyle;


  const handleContextMenu = (e) => {
    e.preventDefault();
    if (handleTagClose) {
      handleTagClose(id);
    }
  };  

  return (
    <div key={id} ref={setNodeRef} {...attributes} {...listeners} style={style} className={`${ItemClassName}`} onContextMenu={handleContextMenu}>
      {content}
    </div>
  );
};
