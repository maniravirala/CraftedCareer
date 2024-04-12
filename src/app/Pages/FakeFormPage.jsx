import React,{useState} from "react";
import { useResumeData } from "../../contexts/Data/FakeFormData";
import {
    DndContext,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
    DragOverlay,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
} from "@dnd-kit/sortable";

import { Tag } from "../../components/DND/Tag";

const FakeFormPage = () => {
    const { resumeData, setResumeData, handleChange } = useResumeData();
    const [domains, setDomains] = useState(resumeData.technicalSkills || []);

    let nextId = resumeData.technicalSkills.length > 0 ? Math.max(...resumeData.technicalSkills.map((domain) => domain.id)) +1 : 1;

    const addNewSectionItem = (section) => {
        setResumeData({
            ...resumeData,
            [section]: [
                ...resumeData[section],
                {
                    id: nextId,
                    skill: "",
                    description: "",
                    startDate: "",
                    endDate: "",
                },
            ],
        });
    };

    const removeSectionItem = (section, index) => {
        const newItems = [...resumeData[section]];
        newItems.splice(index, 1);
        setResumeData({
            ...resumeData,
            [section]: newItems,
        });
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;
        if (active.id !== over.id) {
            const activeIndex = resumeData.technicalSkills.findIndex((skill) => skill.id === active.id);
            const overIndex = resumeData.technicalSkills.findIndex((skill) => skill.id === over.id);
            
            const oldDomains = resumeData.technicalSkills;
            const newDomains = [...resumeData.technicalSkills];
            newDomains.splice(overIndex, 1);
            newDomains.splice(activeIndex,0,oldDomains[overIndex]);
            
            setResumeData({
                ...resumeData,
                technicalSkills: newDomains,
            });
        }
    };
    
    

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(MouseSensor),
        useSensor(TouchSensor)
    );

    return (
        <div className="flex">
            <div>
                <h1>Fake Form</h1>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handleChange(e, "personalInfo")}
                />
                {/* Technical Skills */}
                <hr />
                <h2>Technical Skills</h2>
                <div>
                    {resumeData.technicalSkills.map((skill, index) => (
                        <div key={index} data-id={index}>
                            <label>Skill:</label>
                            <input
                                type="text"
                                name="skill"
                                value={skill.skill}
                                onChange={(e) => handleChange(e, "technicalSkills", index)}
                            />
                            <button
                                className="bg-red-200 p-2 rounded-lg"
                                onClick={() => removeSectionItem("technicalSkills", index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="bg-green-200 p-2 rounded-lg"
                    onClick={() => addNewSectionItem("technicalSkills")}
                >
                    Add Skill
                </button>
                {/* Other sections like extraCurricularActivities, internships, etc. */}
            </div>
            <div>
                <h2>Resume Preview</h2>
                <h3>{resumeData.personalInfo.name}</h3>
                <h4>Technical Skills</h4>
                <div>
                    <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCenter}>
                        <SortableContext
                            items={resumeData.technicalSkills}
                        >
                            {resumeData.technicalSkills.map((skill, index) => (
                                <div className="bg-main">
                                    <Tag
                                        id={skill.id}
                                        content={
                                            <div>
                                                <h1 className="m-2">{skill.skill}</h1>
                                            </div>
                                        }
                                    />
                                </div>
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
                {/* Other sections like extraCurricularActivities, internships, etc. */}
            </div>
        </div>
    );
};

export default FakeFormPage;
