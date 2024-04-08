import React, { useEffect, useState } from 'react';
import DragAndDropContainer from '../DND/DragAndDropContainer';
import { useFormData } from '../../contexts/Data/FormDataContext';

const Template2 = () => {
    const { formData, handleChange } = useFormData();

    const [domains, setDomains] = useState(formData.technicalSkills || []);
    const [items, setItems] = useState(domains);

    const ItemClassName = "bg-teal-200 p-2 m-2 rounded-md shadow-md inline";

    return (
        <DragAndDropContainer items={items} setItems={setItems} ItemClassName={ItemClassName} />
    );
}

export default Template2;

