import React, { useState } from 'react';
import Section from './Section';

const ResumeTemplate = () => {
  const [sections, setSections] = useState([
    { title: 'Education', content: 'Your education details' },
    { title: 'Experience', content: 'Your work experience' },
    { title: 'Skills', content: 'Your skills' },
  ]);

  const handleDragStart = (e, title) => {
    e.dataTransfer.setData('title', title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTitle) => {
    const sourceTitle = e.dataTransfer.getData('title');
    const updatedSections = [...sections];
    const sourceIndex = updatedSections.findIndex((section) => section.title === sourceTitle);
    const targetIndex = updatedSections.findIndex((section) => section.title === targetTitle);
    const [movedSection] = updatedSections.splice(sourceIndex, 1);
    updatedSections.splice(targetIndex, 0, movedSection);
    setSections(updatedSections);
  };

  return (
    <div className="flex flex-wrap">
      {sections.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          content={section.content}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default ResumeTemplate;
