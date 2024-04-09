import { SortableContext } from "@dnd-kit/sortable";
import { Tag } from "./Tag";

export const Column = ({ items, ItemClassName, handleTagClose }) => {
  return (
    <div>
      <SortableContext items={items}>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <Tag
              key={item.id}
              id={item.id}
              content={item.content}
              ItemClassName={ItemClassName}
              handleTagClose={handleTagClose}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};
