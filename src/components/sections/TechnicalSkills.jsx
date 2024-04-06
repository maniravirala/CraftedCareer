import React, { useState } from "react";
import { BiAddToQueue, BiCodeAlt, BiEraser } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { Flex, message } from 'antd';

import DraggableTag from '../Inputs/DraggableTag';
import { useFormData } from "../../contexts/Data/FormDataContext";

const TechnicalSkills = ( ) => {

    const { formData, handleChange } = useFormData();

    const [domains, setDomains] = useState(formData.technicalSkills || []);

    const handletechnicalSkillsChange = (e, domainIndex) => {
        const updatedDomains = [...domains];
        const name = e.target.name.split("-")[0];
        updatedDomains[domainIndex][name] = e.target.value;
        setDomains(updatedDomains);
        handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", domainIndex);
    };

    const addDomain = () => {
        setDomains([...domains, { domain: "", temp: "", skills: [] }]);
    };

    const removeDomain = (index) => {
        const updatedDomains = [...domains];
        updatedDomains.splice(index, 1);
        setDomains(updatedDomains);
        handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", index);
    };

    const handleOnKeyDown = (index) => {
        let value = domains[index].temp;
        let skills = domains[index].skills;
        if (value && !skills.some((tag) => tag.text === value)) {
            const newTag = {
                id: skills.length + 1,
                text: value,
            };
            skills.push(newTag);
            const updatedDomains = [...domains];
            updatedDomains[index].skills = skills;
            updatedDomains[index].temp = "";
            setDomains(updatedDomains);
            handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", index);
        }
        else {
            message.error("Skill already exists or empty tag");
        }
    };

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event, domainIndex) => {
        const { active, over } = event;
        if (!over) {
            return;
        }
        if (active.id !== over.id) {
            const updatedDomains = [...domains];
            const activeIndex = updatedDomains[domainIndex].skills.findIndex((tag) => tag.id === active.id);
            const overIndex = updatedDomains[domainIndex].skills.findIndex((tag) => tag.id === over.id);
            const activeTag = updatedDomains[domainIndex].skills[activeIndex];
            updatedDomains[domainIndex].skills.splice(activeIndex, 1);
            updatedDomains[domainIndex].skills.splice(overIndex, 0, activeTag);
            setDomains(updatedDomains);
            handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", domainIndex);
        }
    }

    const handleTagClose = (tag, domainIndex) => {
        const updatedDomains = [...domains];
        updatedDomains[domainIndex].skills = updatedDomains[domainIndex].skills.filter((t) => t.id !== tag.id);
        updatedDomains[domainIndex].skills = updatedDomains[domainIndex].skills.map((t, index) => ({ ...t, id: index + 1 }));
        setDomains(updatedDomains);
        handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", domainIndex);
    };

    return (
        <div>
            <div
                className="flex items-center justify-between w-full p-3 sm:p-10 gap-8"
            >
                <h2 className="text-xl font-semibold">Technical Skills</h2>
                <button
                    type="button"
                    onClick={addDomain}
                    className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none"
                >
                    <BiAddToQueue className="inline-block" size="1.5rem" />
                    Add Domain
                </button>
            </div>
            <div>
                {domains.map((domain, domainIndex) => (
                    <div key={domainIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            name={`domain-${domainIndex}`}
                            label="Domain"
                            value={domain.domain}
                            onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
                            decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
                        />

                        <InputMani
                            name={`temp-${domainIndex}`}
                            label="Skills"
                            value={domain.temp}
                            onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
                            onKeyDown={(e) => e.key === "Enter" && handleOnKeyDown(domainIndex)}
                            decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
                        />

                        <DndContext sensors={sensors} onDragEnd={(event) => handleDragEnd(event, domainIndex)}>
                            <SortableContext items={domain.skills.map((tag) => tag.id)} strategy={horizontalListSortingStrategy}>
                                <Flex gap="4px 0" wrap="wrap">
                                    {domain.skills.map((tag) => (
                                        <DraggableTag tag={tag} key={tag.id} handleTagClose={() => handleTagClose(tag, domainIndex)} />
                                    ))}
                                </Flex>
                            </SortableContext>
                        </DndContext>

                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeDomain(domainIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Domain
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
