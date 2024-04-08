import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Item = ({ id, content, ItemClassName }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition, 
    touchAction: "none", 
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={`${ItemClassName}` }>
      {content}
    </div>
  );
};
