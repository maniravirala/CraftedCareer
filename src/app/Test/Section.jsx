import React from 'react';

const Section = ({ title, content, onDragStart, onDragOver, onDrop }) => {
  const handleDragStart = (e) => {
    onDragStart(e, title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e, title);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="bg-gray-200 p-4 m-2"
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Section;
