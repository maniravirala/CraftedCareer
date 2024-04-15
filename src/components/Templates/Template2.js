import React, { useState } from 'react';
import DragAndDropContainer from '../DND/DragAndDropContainer';
 
const Template2 = () => {
 
    const [items, setItems] = useState([
        { id: 1, content: "Item 1" },
        { id: 2, content: "Item 2" },
        { id: 3, content: "Item 3" },
        { id: 4, content: "Item 4" },
        { id: 5, content: "Item 5" },
    ]);
    const ItemClassName = "bg-teal-200 p-2 m-2 rounded-md shadow-md inline";

    return (
        <DragAndDropContainer items={items} setItems={setItems} ItemClassName={ItemClassName} />
    );
};

export default Template2;

