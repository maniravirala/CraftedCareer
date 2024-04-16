import React, { useState } from 'react';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { Flex, message } from 'antd';

import DraggableTag from '../Inputs/DraggableTag';

const Template3 = () => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      setTags((data) => {
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.some((tag) => tag.text === inputValue)) {
      const newTag = {
        id: tags.length + 1, // Generate a unique id for the new tag
        text: inputValue,
      };
      setTags([...tags, newTag]);
      setInputValue("");
    } else {
      message.error("Skill already exists or empty tag");
    }
  };

  const handleTagClose = (tag) => {
    setTags(tags.filter((item) => item.id !== tag.id));
  }


  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleInputConfirm();
          }
        }}
        placeholder="Enter tags"
      />
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <SortableContext items={tags} strategy={horizontalListSortingStrategy}>
          <Flex gap="4px 0" wrap="wrap">
            {tags.map((tag) => (
              <DraggableTag tag={tag} key={tag.id} handleTagClose={handleTagClose} />
            ))}
          </Flex>
        </SortableContext>
      </DndContext>

    </>
  );
};
export default Template3;
