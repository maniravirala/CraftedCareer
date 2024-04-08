import { SortableContext } from "@dnd-kit/sortable";
import { Item } from "./Item";

export const Column = ({ items, ItemClassName }) => {
  return (
    <div>
      <SortableContext items={items}>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              content={item.content}
              ItemClassName={ItemClassName}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};
