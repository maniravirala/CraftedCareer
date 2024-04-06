import React from 'react';

import { Tag } from 'antd';
import { useSortable } from '@dnd-kit/sortable';

const commonStyle = {
  cursor: 'grab',
  transition: 'unset', // Prevent element from shaking after drag
};


const DraggableTag = (props) => {
    const { tag, handleTagClose } = props;
    const { listeners, transform, transition, isDragging, setNodeRef } = useSortable({
      id: tag.id,
    });
    const style = transform
      ? {
        ...commonStyle,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging
        cursor: isDragging? 'grabbing' : 'grab',
      }
      : commonStyle;
  
    const handleContextMenu = (e) => {
      e.preventDefault(); // Prevent default context menu
      handleTagClose(tag);
    };
  
    return (
      <Tag style={style} ref={setNodeRef} {...listeners} onContextMenu={handleContextMenu} className='bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] px-2 py-1 border-0'>
        {tag.text}
        <span>
        </span>
      </Tag>
    );
  };

export default DraggableTag;