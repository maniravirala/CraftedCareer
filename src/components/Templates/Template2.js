import React, { useState } from 'react';
import { useFormData } from '../../contexts/Data/FormDataContext';
import {
    DndContext,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { Tag } from "../DND/Tag";
import { message } from 'antd';


const Template2 = () => {
    const { formData, handleChange } = useFormData();
    const [domains, setDomains] = useState(formData.technicalSkills || []);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = domains.findIndex((domain) => domain.id === active.id);
            const newIndex = domains.findIndex((domain) => domain.id === over.id);
            const newDomains = [...domains];
            newDomains.splice(oldIndex, 1);
            newDomains.splice(newIndex, 0, domains[oldIndex]);
            setDomains(newDomains);
            message.success(newDomains.map((domain) => domain.content.domain).join(',') + ' reordered');
            handleChange(
                {
                    target: {
                        name: "technicalSkills",
                        value: newDomains,
                    },
                },
                "technicalSkills",
                oldIndex
            );

        }
    }

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(PointerSensor)
    );

    return (
        <DndContext
            onDragEnd={handleDragEnd}
            sensors={sensors}
            collisionDetection={closestCenter}
        >
            <div className="flex flex-col gap-2">
                <SortableContext items={formData.technicalSkills}>
                    {formData.technicalSkills.map((domain) => (
                        <Tag
                            key={domain.id}
                            id={domain.id}
                            content={
                                // domain.content.domain
                                <div key={domain.id} className="text-xs flex flex-col gap-2">
                                    <h1 className="font-semibold">{domain.content.domain}:</h1>
                                    <div className='flex flex-wrap ml-4'>
                                        {domain.content.skills.map((tag, index) => (
                                            <span key={tag.id} className={index === domain.content.skills.length - 1 ? '' : 'mr-2'}>
                                                {tag.content}{index !== domain.content.skills.length - 1 && ','}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            }
                            ItemClassName="bg-blue-500 text-white p-2 rounded-md"

                        />
                    ))}
                </SortableContext>
            </div>
        </DndContext>
    );
};

export default Template2;
