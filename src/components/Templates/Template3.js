import React, { useState } from "react";
import { Input } from "antd";
import { BiXCircle } from "react-icons/bi";

const Template3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("tagIndex", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const tagIndex = parseInt(e.dataTransfer.getData("tagIndex"));
    const newTags = [...tags];
    const [removedTag] = newTags.splice(tagIndex, 1);
    newTags.splice(dropIndex, 0, removedTag);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Template 3</h1>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleInputConfirm}
        placeholder="Enter tags"
      />
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-500 p-2 m-1 rounded-lg text-white cursor-move"
            style={{ userSelect: "none" }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {tag}
            <BiXCircle
              onClick={() => handleClose(tag)}
              className="inline-block ml-2 cursor-pointer"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Template3;
